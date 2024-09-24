function openNewWindowBody(windowTitle, initialText) {
  const newWindow = document.createElement('div');
  newWindow.classList.add('window', 'draggable');
  newWindow.style.margin = '32px';
  newWindow.style.width = '400px';
  newWindow.style.display = 'block';
  newWindow.style.position = 'fixed';
  newWindow.style.top = '50%';
  newWindow.style.left = '50%';
  newWindow.style.transform = 'translate(-50%, -50%)';
  
  const titleBar = document.createElement('div');
  titleBar.classList.add('title-bar');
  newWindow.appendChild(titleBar);
  
  const titleBarText = document.createElement('div');
  titleBarText.classList.add('title-bar-text');
  titleBarText.textContent = windowTitle;
  titleBar.appendChild(titleBarText);
  
  const titleBarControls = document.createElement('div');
  titleBarControls.classList.add('title-bar-controls');
  titleBar.appendChild(titleBarControls);
  
  const closeButton = document.createElement('button');
  closeButton.classList.add('CloseNotepad');
  closeButton.setAttribute('aria-label', 'Close');
  titleBarControls.appendChild(closeButton);
  
  const windowBody = document.createElement('div');
  windowBody.classList.add('window-body');
  newWindow.appendChild(windowBody);
  
  // notepad content
  const notepadContent = document.createElement('textarea');
  notepadContent.style.width = '100%';
  notepadContent.style.height = '300px';
  notepadContent.style.overflowY = 'auto';
  notepadContent.textContent = initialText;
  windowBody.appendChild(notepadContent);
  
  document.body.appendChild(newWindow);
  
  $(newWindow).draggable({
    start: function () {
      $(this).css({ transform: "none", top: $(this).offset().top + "px", left: $(this).offset().left + "px" });
    }
  });
  
  closeButton.addEventListener('click', function() {
    newWindow.remove();
  });
}

function NotePadBody(title, text) {
  openNewWindowBody(title, text);
}

function HoaRef() {
  window.location.href = 'hoa.html';
}