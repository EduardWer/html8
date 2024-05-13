let cars = [];

function displayCars() {
    const tableBody = document.querySelector('#carTable tbody');
    tableBody.innerHTML = '';

    cars.forEach((car, index) => {
        const row = document.createElement('tr');

        const brandCell = document.createElement('td');
        brandCell.textContent = car.brand;
        row.appendChild(brandCell);

        const modelCell = document.createElement('td');
        modelCell.textContent = car.model;
        row.appendChild(modelCell);

        const yearCell = document.createElement('td');
        yearCell.textContent = car.year;
        row.appendChild(yearCell);

        const colorCell = document.createElement('td');
        colorCell.textContent = car.color;
        row.appendChild(colorCell);

        const actionsCell = document.createElement('td');
        const editButton = document.createElement('button');
        editButton.textContent = 'Изменить';
        editButton.onclick = () => editCar(index);
        actionsCell.appendChild(editButton);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Удалить';
        deleteButton.onclick = () => deleteCar(index);
        actionsCell.appendChild(deleteButton);

        row.appendChild(actionsCell);
        tableBody.appendChild(row);
    });
}

function addCar() {
    const brand = prompt('Введите марку автомобиля');
    const model = prompt('Введите модель автомобиля');
    const year = prompt('Введите год выпуска автомобиля');
    const color = prompt('Введите цвет автомобиля');

    if (brand && model && year && color) {
        const car = {
            brand,
            model,
            year,
            color
        };

        cars.push(car);
        displayCars();
    } else {
        alert('Пожалуйста, заполните все поля');
    }
}

function editCar(index) {
    const car = cars[index];
    const brand = prompt('Введите новую марку автомобиля', car.brand);
    const model = prompt('Введите новую модель автомобиля', car.model);
    const year = prompt('Введите новый год выпуска автомобиля', car.year);
    const color = prompt('Введите новый цвет автомобиля', car.color);

    if (brand && model && year && color) {
        car.brand = brand;
        car.model = model;
        car.year = year;
        car.color = color;
        displayCars();
    } else {
        alert('Пожалуйста, заполните все поля');
    }
}

function deleteCar(index) {

    if (confirm('Вы уверены, что хотите удалить этот автомобиль?')) {
        cars.splice(index, 1);
        displayCars();
    }
}

displayCars();
