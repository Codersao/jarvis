window.onload = function () {
    playVideo();
    autoType(); // Start the typing effect when page loads
};

// Function to play video when the page loads
function playVideo() {
    const video = document.getElementById("myVideo");

    // Try to autoplay the video
    video.play().catch(function (error) {
        // If autoplay fails, show the fallback play button
        console.log("Autoplay failed, user needs to interact.");
        document.getElementById("playButton").style.display = "block";
    });

    // Unmute video after it starts playing
    video.onplay = function () {
        video.muted = false; // Unmute once the video starts playing
    };
}

// Fallback button functionality for video play
document.getElementById("playButton").onclick = function () {
    const video = document.getElementById("myVideo");
    video.play();  // Play the video when button is clicked
    this.style.display = "none"; // Hide the button after it's clicked
};

// Auto-type effect for the text
const text = document.querySelector('#text');
const str = '"तुम्हारा हां सुनकर मेरी दुनिया रोशन हो गई है। मैं वादा करता हूँ कि तुम्हारे साथ हमेशा खुश रहूँगा और हर पल को खास बनाऊँगा। धन्यवाद, तुमने मुझे अपना साथी चुना।"';
let i = 0;

function autoType() {
    if (i < str.length) {
        text.innerHTML += str.charAt(i);  // Add one character at a time
        i++;
        setTimeout(autoType, 100);  // Call autoType again after 100 ms for the next character
    }
}
