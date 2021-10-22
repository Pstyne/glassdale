export const Facility = (obj) => {
  return `
    <section class="facility">
      <h3 class="facility__name">${obj.facilityName}</h3>
      <p class="facility__security_level">Security Level: ${obj.securityLevel}</p>
      <p class="facility__capacity">Capacity: ${obj.capacity}</p>
    </section>
  `
}