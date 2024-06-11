/* eslint-disable */
module.exports = function () {
  return {
    data: {
      DATA_CARDS_AD: [
        {
          caption: 'здоровье\nженщины',
          description: 'комплекс анализов для оценки женского здоровья',
          title: 'Здоровье женщины',
          text: 'Стоимость комплекса 950 руб.\nАкция действует до 30.04.2024 г.',
          img: 'girl.png',
          class: 'card_color_white'
        },
        {
          caption: 'мужское\nздоровье',
          description: 'комплекс анализов для оценки мужского здоровья',
          title: 'Мужское здоровье',
          text: 'Стоимость комплекса 950 руб.\nАкция действует до 30.04.2024 г.',
          img: 'man.png'
        },
        {
          caption: 'худеем\nк лету',
          description: 'комплекс анализов для оценки женского здоровья',
          title: 'Худеем к лету',
          text: 'Стоимость комплекса 1400 руб.\nАкция действует до 30.04.2024 г.',
          img: 'girl1.png',
          class: 'card_color_white'
        },
        {
          caption: 'мужское\nздоровье',
          description: 'комплекс анализов для оценки мужского здоровья',
          title: 'Мужское здоровье',
          text: 'Стоимость комплекса 950 руб.\nАкция действует до 30.04.2024 г.',
          img: 'man.png'
        },
        {
          caption: 'худеем\nк лету',
          description: 'комплекс анализов для оценки женского здоровья',
          title: 'Худеем к лету',
          text: 'Стоимость комплекса 1400 руб.\nАкция действует до 30.04.2024 г.',
          img: 'girl1.png',
          class: 'card_color_white'
        },
        {
          caption: 'худеем\nк лету',
          description: 'комплекс анализов для оценки женского здоровья',
          title: 'Худеем к лету',
          text: 'Стоимость комплекса 1400 руб.\nАкция действует до 30.04.2024 г.',
          img: 'girl1.png',
          class: 'card_color_white'
        }
      ],
    },
    functions: {
      repeat(value) {
        return value * 3
      },
    },
    filters: {
      backwords(value) {
        return `${value} 123`
      },
    },
  }
}
