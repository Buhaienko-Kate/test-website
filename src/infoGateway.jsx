const baseUrl = 'https://614086504a700c0017b0cd68.mockapi.io/api/v1/cards';

export const fetchCardsList = () =>
  fetch(baseUrl).then(response => {
    if (!response.ok) {
      throw new Error("Internet Server Error. Can't display events");
    }
    return response.json();
  });
