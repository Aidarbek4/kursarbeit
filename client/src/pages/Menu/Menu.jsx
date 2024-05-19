import React from 'react'
import "./menu.scss"
import Product from '../../components/ProductCard/Product'

function Menu() {

    const foods = [
        {
            name: "Cake with raspberries",
            price: "45$",
            image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZvb2R8ZW58MHx8MHx8fDA%3D"
        },
        {
            name: "Pancakes with jam",
            price: "20$",
            image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=1980&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            name: "Meatballs",
            price: "78$",
            image: "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D"
        },
        {
            name: "barbeque",
            price: "105$",
            image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D"
        },
        {
            name: "Lemonade",
            price: "16$",
            image: "https://images.unsplash.com/photo-1609951651556-5334e2706168?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fGZvb2R8ZW58MHx8MHx8fDA%3D"
        },
        {
            name: "vareniki",
            price: "82$",
            image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fGZvb2R8ZW58MHx8MHx8fDA%3D"
        },
        {
            name: "Ramen",
            price: "120$",
            image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTZ8fGZvb2R8ZW58MHx8MHx8fDA%3D"
        },
        {
            name: "Milkshake",
            price: "63$",
            image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTJ8fGZvb2R8ZW58MHx8MHx8fDA%3D"
        },
        {
            name: "Fresh salad",
            price: "20$",
            image: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAzfHxmb29kfGVufDB8fDB8fHww"
        }
    ]

  return (
    <section className="menu">
        <div className="container">
            <div className="menu__inner">
                <aside className="menu__categories">
                    <ul className="menu__categories-list">
                        <li className="menu__categories-item">
                            <button className="menu__categories-btn category">
                                Drinks
                            </button>
                        </li>
                        <li className="menu__categories-item">
                            <button className="menu__categories-btn category">
                                Chineese food
                            </button>
                        </li>
                        <li className="menu__categories-item">
                            <button className="menu__categories-btn category">
                                Italien food
                            </button>
                        </li>
                        <li className="menu__categories-item">
                            <button className="menu__categories-btn category">
                                Salads
                            </button>
                        </li>
                        <li className="menu__categories-item">
                            <button className="menu__categories-btn category">
                                Alcohol drinks
                            </button>
                        </li>
                    </ul>
                </aside>
                <main className="menu__content">
                    <h2 className="menu__title">Drinks</h2>
                    <div className="menu__items">
                        {foods.map((food) => (
                            <Product 
                                key={food.id}
                                name={food.name}
                                image={food.image}
                                price={food.price}
                            />
                        ))}
                    </div>
                </main>
            </div>
        </div>
    </section>
  )
}

export default Menu