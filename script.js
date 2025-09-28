document.addEventListener('DOMContentLoaded', () => {
    const questionMenu = document.getElementById('questionMenu');
    const overlayContainer = document.getElementById('overlayContainer');

    // Define the clickable areas (squares)
    // You'll need to manually get these coordinates from your image
    const clickableAreas = [
        // Example for the first square under "MATCHING"
        { id: 'matching-1', top: 180, left: 35, width: 80, height: 80 },
        // Example for the second square under "MATCHING"
        { id: 'matching-2', top: 180, left: 125, width: 80, height: 80 },
        // ... add all your squares here
        // Adjust these values carefully based on your questionmenu.png
        // (top, left, width, height) in pixels
        // Matching section
        { id: 'm1', top: 180, left: 35, width: 75, height: 75 },
        { id: 'm2', top: 180, left: 120, width: 75, height: 75 },
        { id: 'm3', top: 180, left: 205, width: 75, height: 75 },
        { id: 'm4', top: 265, left: 35, width: 75, height: 75 },
        { id: 'm5', top: 265, left: 120, width: 75, height: 75 },
        { id: 'm6', top: 265, left: 205, width: 75, height: 75 },
        { id: 'm7', top: 350, left: 35, width: 75, height: 75 },
        { id: 'm8', top: 350, left: 120, width: 75, height: 75 },
        { id: 'm9', top: 350, left: 205, width: 75, height: 75 },
        { id: 'm10', top: 435, left: 35, width: 75, height: 75 },
        { id: 'm11', top: 435, left: 120, width: 75, height: 75 },
        { id: 'm12', top: 435, left: 205, width: 75, height: 75 },

        // Measuring section
        { id: 'meas1', top: 180, left: 320, width: 75, height: 75 },
        { id: 'meas2', top: 180, left: 405, width: 75, height: 75 },
        { id: 'meas3', top: 180, left: 490, width: 75, height: 75 },
        { id: 'meas4', top: 265, left: 320, width: 75, height: 75 },
        { id: 'meas5', top: 265, left: 405, width: 75, height: 75 },
        { id: 'meas6', top: 265, left: 490, width: 75, height: 75 },
        { id: 'meas7', top: 350, left: 320, width: 75, height: 75 },
        { id: 'meas8', top: 350, left: 405, width: 75, height: 75 },
        { id: 'meas9', top: 350, left: 490, width: 75, height: 75 },
        { id: 'meas10', top: 435, left: 320, width: 75, height: 75 },
        { id: 'meas11', top: 435, left: 405, width: 75, height: 75 },
        { id: 'meas12', top: 435, left: 490, width: 75, height: 75 },

        // Radar section
        { id: 'rad1', top: 180, left: 600, width: 75, height: 75 },
        { id: 'rad2', top: 180, left: 685, width: 75, height: 75 },
        { id: 'rad3', top: 180, left: 770, width: 75, height: 75 },
        { id: 'rad4', top: 265, left: 600, width: 75, height: 75 },
        { id: 'rad5', top: 265, left: 685, width: 75, height: 75 },
        { id: 'rad6', top: 265, left: 770, width: 75, height: 75 },
        { id: 'rad7', top: 350, left: 600, width: 75, height: 75 },
        { id: 'rad8', top: 350, left: 685, width: 75, height: 75 },
        { id: 'rad9', top: 350, left: 770, width: 75, height: 75 },
        { id: 'rad10', top: 435, left: 600, width: 75, height: 75 },
        { id: 'rad11', top: 435, left: 685, width: 75, height: 75 },
        { id: 'rad12', top: 435, left: 770, width: 75, height: 75 },

        // Thermometer section
        { id: 'th1', top: 180, left: 880, width: 75, height: 75 },
        { id: 'th2', top: 180, left: 965, width: 75, height: 75 },
        { id: 'th3', top: 265, left: 880, width: 75, height: 75 },
        { id: 'th4', top: 265, left: 965, width: 75, height: 75 },

        // Photo section
        { id: 'ph1', top: 180, left: 1070, width: 75, height: 75 },
        { id: 'ph2', top: 180, left: 1155, width: 75, height: 75 },
        { id: 'ph3', top: 180, left: 1240, width: 75, height: 75 },
        { id: 'ph4', top: 265, left: 1070, width: 75, height: 75 },
        { id: 'ph5', top: 265, left: 1155, width: 75, height: 75 },
        { id: 'ph6', top: 265, left: 1240, width: 75, height: 75 },
        { id: 'ph7', top: 350, left: 1070, width: 75, height: 75 },
        { id: 'ph8', top: 350, left: 1155, width: 75, height: 75 },
        { id: 'ph9', top: 350, left: 1240, width: 75, height: 75 },
        { id: 'ph10', top: 435, left: 1070, width: 75, height: 75 },
        { id: 'ph11', top: 435, left: 1155, width: 75, height: 75 },
        { id: 'ph12', top: 435, left: 1240, width: 75, height: 75 },

        // Tentacles section
        { id: 't1', top: 560, left: 600, width: 75, height: 75 },
        { id: 't2', top: 560, left: 685, width: 75, height: 75 },
        { id: 't3', top: 560, left: 770, width: 75, height: 75 },
        { id: 't4', top: 645, left: 600, width: 75, height: 75 },
        { id: 't5', top: 645, left: 685, width: 75, height: 75 },
        { id: 't6', top: 645, left: 770, width: 75, height: 75 },

    ];

    questionMenu.addEventListener('click', (event) => {
        const x = event.offsetX;
        const y = event.offsetY;

        // Find which square was clicked
        const clickedArea = clickableAreas.find(area =>
            x >= area.left && x <= (area.left + area.width) &&
            y >= area.top && y <= (area.top + area.height)
        );

        if (clickedArea) {
            // Check if an overlay for this square already exists
            const existingOverlay = document.getElementById(`overlay-${clickedArea.id}`);
            if (existingOverlay) {
                // If it exists, remove it (toggle effect)
                existingOverlay.remove();
            } else {
                // If not, create and append the overlay
                const overlay = document.createElement('div');
                overlay.className = 'overlay-square';
                overlay.id = `overlay-${clickedArea.id}`; // Give it a unique ID
                overlay.style.top = `${clickedArea.top}px`;
                overlay.style.left = `${clickedArea.left}px`;
                overlay.style.width = `${clickedArea.width}px`;
                overlay.style.height = `${clickedArea.height}px`;
                overlayContainer.appendChild(overlay);
            }
        }
    });
});
