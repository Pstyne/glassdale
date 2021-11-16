export const Facility = (obj, criminals) => {
  return `
    <section class="facility">
      <h3 class="facility__name">${obj.facilityName}</h3>
      <p class="facility__security_level">Security Level: ${obj.securityLevel}</p>
      <p class="facility__capacity">Capacity: ${obj.capacity}</p>
      <h4>Criminals</h4>
      <ul>${criminals.map(c => `<li>${c.name}</li>`).join('')}</ul>
    </section>
  `
}