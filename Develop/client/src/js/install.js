const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
let deferredPrompt;

// Event handler for the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault(); // Prevent the default browser prompt
  deferredPrompt = event; // Store the event for later use
  showInstallButton(); // Show the install button
});

// Click event handler for the `butInstall` element
butInstall.addEventListener('click', async () => {
  if (deferredPrompt) {
    deferredPrompt.prompt(); // Show the install prompt
    const result = await deferredPrompt.userChoice; // Wait for the user's choice
    if (result.outcome === 'accepted') {
      console.log('PWA installation accepted');
    } else {
      console.log('PWA installation dismissed');
    }
    deferredPrompt = null; // Reset the deferredPrompt variable
    hideInstallButton(); // Hide the install button
  }
});

// Event handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
  console.log('PWA installed');
});

// Helper functions to show/hide the install button
function showInstallButton() {
  butInstall.style.display = 'block';
}

function hideInstallButton() {
  butInstall.style.display = 'none';
}
