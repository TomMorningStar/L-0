import { rootRender } from './components/cartItem.js'
import { items } from './data.js'
import { renderDeliveryHtml } from './components/delivery.js'


document.addEventListener('DOMContentLoaded', () => {
  renderDeliveryHtml(items);
  rootRender(items);
})
