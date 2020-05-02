package main

import (
	"flag"
	"fmt"
	"log"
	"net/http"

	"google.golang.org/api/googleapi/transport"
	"google.golang.org/api/youtube/v3"
)

var (
	query      = flag.String("query", "Google", "Search term")
	maxResults = flag.Int64("max-results", 25, "Max YouTube results")
)

const developerKey = "AIzaSyDn1bKCl8l6qMAcGwLQz04Fvw2uOcnm1o0"

// Retrieve resource for the authenticated user's channel
func channelsListMine(service *youtube.Service, part string) *youtube.ChannelListResponse {
	call := service.Channels.List(part)
	call = call.Mine(true)
	response, err := call.Do()
	handleError(err, "")
	return response
}

func playlistItemsList(service *youtube.Service, part string, playlistId string, pageToken string) *youtube.PlaylistItemListResponse {
	call := service.PlaylistItems.List(part)
	call = call.PlaylistId(playlistId)
	if pageToken != "" {
		call = call.PageToken(pageToken)
	}
	response, err := call.Do()
	handleError(err, "")
	return response
}

func main() {
	client := &http.Client{
		Transport: &transport.APIKey{Key: developerKey},
	}
	service, err := youtube.New(client)
	
	if err != nil {
		log.Fatalf("Error creating YouTube client: %v", err)
	}

	call := service.Channels.List("contentDetails")
	call = call.Id("UC4JX40jDee_tINbkjycV4Sg")
	response, err := call.Do()
	channel := response.Items[0]
	playlistId := channel.ContentDetails.RelatedPlaylists.Uploads
	playlistResponse := playlistItemsList(service, "snippet", playlistId, "")

	for _, playlistItem := range playlistResponse.Items {
		title := playlistItem.Snippet.Title
		videoId := playlistItem.Snippet.ResourceId.VideoId
		fmt.Printf("%v, (%v)\r\n", title, videoId)
	}

	// response := channelsListMine(service, "contentDetails")

	// for _, channel := range response.Items {
	// 	playlistId := channel.ContentDetails.RelatedPlaylists.Uploads
		
	// 	// Print the playlist ID for the list of uploaded videos.
	// 	fmt.Printf("Videos in list %s\r\n", playlistId)

	// 	nextPageToken := ""
	// 	for {
	// 		// Retrieve next set of items in the playlist.
	// 		playlistResponse := playlistItemsList(service, "snippet", playlistId, nextPageToken)
			
	// 		for _, playlistItem := range playlistResponse.Items {
	// 			title := playlistItem.Snippet.Title
	// 			videoId := playlistItem.Snippet.ResourceId.VideoId
	// 			fmt.Printf("%v, (%v)\r\n", title, videoId)
	// 		}

	// 		// Set the token to retrieve the next page of results
	// 		// or exit the loop if all results have been retrieved.
	// 		nextPageToken = playlistResponse.NextPageToken
	// 		if nextPageToken == "" {
	// 			break
	// 		}
	// 		fmt.Println()
	// 	}
	// }
}
