export const Note = (obj) => {
  return `
    <section class="note">
      <h3 class="note__suspect">${obj.suspect}</h3>
      <p class="note__date">${obj.date}</p>
      <p class="note__text">${obj.text}</p>
    </section>
  `;
}