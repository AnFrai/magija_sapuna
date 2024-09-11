import { productCardModule } from './product-card-module.js';
import { searchModule } from './search-module.js';
import { navigationModule } from './navigation-module.js';
// import { cartModule } from './add-to-cart/cart-module.js';
import { headerPaddingModule } from './header-padding-module.js';
import { favoritesModule } from './favorites-module.js';
// import { discountModule } from './discount-module.js';
import { toggleFavoriteMessage } from './favorite-text-visibility-module.js';
// import { initCartDropdowns } from './cart-item-buttons.js';
// import cartPriceUpdater from './cart-price-updater.js';
import { sliderShadowModule } from './slider-shadow-module.js';
import { heroParallaxModule } from './hero-parallax-module.js';
import { faqHarmonicaModule } from './faq-harmonica-module.js';

document.addEventListener('DOMContentLoaded', () => {
  productCardModule.init();

  // Инициализация базовых функций управления интерфейсом пользователя
  searchModule.init();
  navigationModule.init();
  headerPaddingModule.init();

  // Инициализация корзины и связанных с ней элементов
  // cartModule.init();
  // initCartDropdowns(cartPriceUpdater);
  // cartPriceUpdater();

  // Инициализация управления избранными элементами и скидками
  favoritesModule.init();
  toggleFavoriteMessage();
  // discountModule.init();

  // Инициализация динамических визуальных эффектов
  sliderShadowModule.init();
  heroParallaxModule.init();

  // Инициализация дополнительных функциональных модулей
  faqHarmonicaModule.init();
});
