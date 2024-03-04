// fileuploader.js

// Import the FileUpdc class from the fileupdc package
import FileUpdc from 'fileupdc';

// Define a function to initialize and render the file uploader component
function initFileUploader(targetElementId) {
  // Find the target element in the DOM
  const targetElement = document.getElementById(targetElementId);
  
  // Check if the target element exists
  if (!targetElement) {
    console.error(`Target element with id '${targetElementId}' not found.`);
    return;
  }

  // Create a new instance of FileUpdc with the target element and an upload callback function
  const uploader = new FileUpdc({
    target: `#${targetElementId}`,
    onUpload: (file) => {
      alert(`Uploaded file: ${file.name}`);
    },
  });

  // Render the file uploader component
  uploader.render();
}

// Export the function for use in other modules
export { initFileUploader };
