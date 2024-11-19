const createEmptyContent = (message) => `
  <div class="empty-content">
    <div>
      <i class="fa-solid fa-circle-exclamation"></i>
      <p class="empty-message">${message}<p>
    </div>
  </div>
`;

export { createEmptyContent };
