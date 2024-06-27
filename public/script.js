document.addEventListener("DOMContentLoaded", () => {
  fetchCars();
  fetchCategories();

  document
    .getElementById("car-form")
    .addEventListener("submit", async (event) => {
      event.preventDefault();
      const modelo = document.getElementById("car-modelo").value;
      const marca = document.getElementById("car-marca").value;
      const ano = document.getElementById("car-ano").value;
      const cor = document.getElementById("car-cor").value;

      const response = await fetch("http://localhost/car", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ modelo, marca, ano: Number(ano), cor }),
      });

      if (response.ok) fetchCars();
      else alert(response.text);
    });

  document
    .getElementById("category-form")
    .addEventListener("submit", async (event) => {
      event.preventDefault();
      const nome_categoria = document.getElementById("category-nome").value;
      const capacidade_passageiros = document.getElementById(
        "category-capacidade"
      ).value;
      const tipo_combustivel = document.getElementById("category-tipo").value;

      const response = await fetch("http://localhost/category", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome_categoria,
          capacidade_passageiros: Number(capacidade_passageiros),
          tipo_combustivel,
        }),
      });

      if (response.ok) fetchCategories();
      else alert(response.text);
    });
});

async function fetchCars() {
  const response = await fetch("http://localhost/car/all");
  const data = await response.json();
  const carList = document.getElementById("car-list");
  carList.innerHTML = "";
  data.cars.forEach((car) => {
    const tr = document.createElement("tr");

    const keys = Object.keys(car);

    keys.forEach((key) => {
      const element = document.createElement("td");
      element.textContent = car[key];
      tr.appendChild(element);
    });

    carList.appendChild(tr);
  });
}

async function fetchCategories() {
  const response = await fetch("http://localhost/category/all");
  const data = await response.json();
  const categoryList = document.getElementById("category-list");
  categoryList.innerHTML = "";
  data.categories.forEach((category) => {
    const tr = document.createElement("tr");

    const keys = Object.keys(category);

    keys.forEach((key) => {
      const element = document.createElement("td");
      element.textContent = category[key];
      tr.appendChild(element);
    });

    categoryList.appendChild(tr);
  });
}
