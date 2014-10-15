masonry-demo-app
================

code challenge using masonry, knockout and the chute api

The three main methods: loadMoreImages(page) addImageThumbnail(item) and imageClickHandler()

loadMoreImages makes the api call and adds each thumbnail to the page, then initializes masonry when the images are done loading.

addImageThumbnail adds a thumbnail for each new image

imageClickHandler handles popping up the lightbox.

A bunch of utility functions is in javascripts/utils

This has only been tested in Chrome 38, but if I get more time I might check Firefox/IE.

Also I didn't use jQuery because it seems like overkill, and just relied on a few simple utility functions
