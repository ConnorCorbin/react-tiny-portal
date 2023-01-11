# react-tiny-portal

> A tiny React portal component safe for client and server side rendering.

## Install

```
$ npm i @corbincon/react-tiny-portal
```

## Usage

```js
import Portal from '@corbincon/react-tiny-portal'

const MyComponent = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <button onClick={() => setIsOpen(true)}>Open portal</button>
            {isOpen && (
                <Portal>
                    <p>Portal content</p>
                    <button onClick={() => setIsOpen(false)}>
                        Close portal
                    </button>
                </Portal>
            )}
        </>
    )
}
```
