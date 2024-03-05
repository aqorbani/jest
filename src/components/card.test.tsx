import { render, screen } from "@testing-library/react"
import Card from "./Card"
import "@testing-library/jest-dom"
import userEvent from "@testing-library/user-event"

const cardProps = {
    "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "rating": { "rate": 3.9, "count": 120 }
}

describe("Card Component", () => {
    test("should show all card items properly", () => {
        const view = render(<Card {...cardProps} />)

        const image = screen.getByRole('img')
        expect(image).toBeInTheDocument()
        expect(image.src).toContain(cardProps.image)

        const title = screen.getByText(cardProps.title)
        expect(title).toBeInTheDocument()

        const price = screen.getByText(`$${cardProps.price}`)
        expect(price).toBeInTheDocument()

        const description = screen.getByText(cardProps.description)
        expect(description).toBeInTheDocument()

        const rate = screen.getByText(`${cardProps.rating.rate}`, { exact: false })
        expect(rate).toBeInTheDocument()

        // example of using view
        // expect(view.container.getElementsByClassName('price')[0]).toBeInTheDocument()

    });
    test("should change the button text after selecting card", async () => {
        // Arrange
        const view = render(
            <Card {...cardProps}
            />
        )

        const button = screen.getByRole('button');

        expect(button).toHaveTextContent('Add to Cart')

        await userEvent.click(button)
        expect(button).toHaveTextContent('selected')


        await userEvent.click(button)
        expect(button).toHaveTextContent('Add to Cart')


    })
})