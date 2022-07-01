window.onSpotifyIframeApiReady = (IFrameAPI) => {
    let element = document.getElementById('embed-iframe');
    let options = {
        uri: 'spotify:episode:7makk4oTQel546B0PZlDM5'
      };
    let callback = (EmbedController) => {};
    IFrameAPI.createController(element, options, callback);
 };

const btn = document.getElementById('btn');

            // Change button text on click
 btn.addEventListener('click', function handleClick() {
btn.innerHTML = `<span><i>ZIŅA NOSŪTĪTA!</i><span>`;
});