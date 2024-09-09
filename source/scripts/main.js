import { searchModule } from './search-module.js';
import { navigationModule } from './navigation-module.js';
import { cartModule } from './cart-module.js';
import { headerPaddingModule } from './header-padding-module.js';
import { favoritesModule } from './favorites-module.js';
import { discountModule } from './discount-module.js';
import { toggleFavoriteMessage } from './favorite-text-visibility-module.js';
import { initCartDropdowns } from './cart-item-buttons.js';
import cartPriceUpdater from './cart-price-updater.js';
import { sliderShadowModule } from './slider-shadow-module.js';
import { heroParallaxModule } from './hero-parallax-module.js';
import { faqHarmonicaModule } from './faq-harmonica-module.js';

document.addEventListener('DOMContentLoaded', () => {
  // Инициализация базовых функций управления интерфейсом пользователя
  searchModule.init();
  navigationModule.init();
  cartModule.init();
  headerPaddingModule.init();

  // Инициализация управления визуальными элементами и контентом
  favoritesModule.init();
  discountModule.init();
  toggleFavoriteMessage();
  cartPriceUpdater();
  initCartDropdowns(cartPriceUpdater);

  // Инициализация динамических визуальных эффектов
  sliderShadowModule.init();
  heroParallaxModule.init();

  // Инициализация дополнительных функциональных модулей
  faqHarmonicaModule.init();
});
