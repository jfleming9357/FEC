for (const dropdown of document.querySelectorAll('.custom-select-wrapper')) {
  dropdown.addEventListener('click', function () {
    this.querySelector('.custom-select').classList.toggle('open');
  });
}
