const scrollContent = document.querySelector('.scroll-content');

scrollContent.addEventListener('mouseover', () => {
  scrollContent.style.animationPlayState = 'paused';
});

scrollContent.addEventListener('mouseout', () => {
  scrollContent.style.animationPlayState = 'running';
});


//  Right scroll JavaScript 

const scrollContentRight = document.querySelector('.scroll-content-right');

scrollContentRight.addEventListener('mouseover', () => {
  scrollContentRight.style.animationPlayState = 'paused';
});

scrollContentRight.addEventListener('mouseout', () => {
  scrollContentRight.style.animationPlayState = 'running';
});

// Cloud scroll section 

const scrollCloudContent = document.querySelector('.scroll-cloud-content');

scrollCloudContent.addEventListener('mouseover', () => {
  scrollCloudContent.style.animationPlayState = 'paused';
});

scrollCloudContent.addEventListener('mouseout', () => {
  scrollCloudContent.style.animationPlayState = 'running';
});
