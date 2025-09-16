function handleOrientation(event) {
            document.getElementById('alpha').textContent = event.alpha.toFixed(2);
            document.getElementById('beta').textContent = event.beta.toFixed(2);
            document.getElementById('gamma').textContent = event.gamma.toFixed(2);
        }
function startOrientation() {
    window.addEventListener('deviceorientation', handleOrientation);
}

if (window.DeviceOrientationEvent) {
    if (typeof DeviceOrientationEvent.requestPermission === 'function') {
        DeviceOrientationEvent.requestPermission()
            .then(permissionState => {
                if (permissionState === 'granted') {
                    startOrientation();
                } else {
                    document.querySelector('.sensor-data').textContent = "Permission denied for DeviceOrientation.";
                }
            })
            .catch(() => {
                document.querySelector('.sensor-data').textContent = "DeviceOrientation permission error.";
            });
    } else {
        startOrientation();
    }
} else {
    document.querySelector('.sensor-data').textContent = "DeviceOrientation not supported.";
}
