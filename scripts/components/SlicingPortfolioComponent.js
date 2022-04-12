import data from '/scripts/data/slicing-portfolio.json' assert { type: 'json' };

class SlicingPortfolioComponent {
  constructor ({ container }) {
    this._container = container;
    this._data = data;

    this.write();
  }

  write () {
    const list = document.createElement('ul');
    list.classList.add('no-list');

    const maxItem = (this._data.length < 3) ? this._data.length : 3;

    for (let i = 0; i < maxItem; i++) {
      list.innerHTML += this.itemTemplate(data[i]);
    }

    this._container.appendChild(list);

    if (this._data.length > 3) this.writeButton();
  }

  writeButton () {
    this._container.innerHTML += this.moreButtonTemplate();

    const moreButton = this._container.querySelector('.more-button');
    moreButton.addEventListener('click', () => {
      const list = this._container.querySelector('ul');
      list.innerHTML = '';

      this._data.forEach((data) => {
        list.innerHTML += this.itemTemplate(data);
      })

      moreButton.remove();
    });
  }

  itemTemplate (data) {
    return `
      <li>
        <a class="item" href="${data.url}" title="${data.name}">
          <div class="image-container"><img src="${data.image_url}" alt="${data.name} Screenshot"></div>
          <p>${data.name}</p>
        </a>
        <a class="btn-icon" href="${data.reference_url}" rel="nofollow" title="${data.name} Reference"><i class="${data.reference_icon}"></i><span>Reference</span></a>
      </li>
    `;
  }

  moreButtonTemplate () {
    return `
      <button class="more-button btn" title="More Slicing Portfolio">More</button>
    `;
  }
}

export default SlicingPortfolioComponent;