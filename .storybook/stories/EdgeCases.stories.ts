import { useEffect } from '@storybook/client-api';

export const SeparateNodeAddition = () => {
  useEffect(() => {
    const container = document.querySelector('#test-html-container');
    if (container) {
      const element = document.createElement('button');
      element.type = 'button';
      element.classList.add('btn');
      element.classList.add('btn-info');
      element.setAttribute('data-kontent-project-id', 'p');
      element.setAttribute('data-kontent-language-codename', 'l');
      element.setAttribute('data-kontent-item-id', 'i');
      element.setAttribute('data-kontent-element-codename', 'e');
      element.innerText = 'Button with smart link';

      container.appendChild(element);
    }
  }, []);

  return `<div id='test-html-container'></div>`;
};

SeparateNodeAddition.storyName = 'node added after SDK is initialized';

export default {
  title: '/edge-cases',
};