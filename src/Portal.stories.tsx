import { ComponentStory, ComponentMeta } from '@storybook/react'

import Portal from './Portal'

export default {
    title: 'Components/Portal',
    component: Portal,
    args: {
        children: (
            <div
                style={{
                    position: 'absolute',
                    width: 250,
                    left: `calc(50% - 125px)`,
                    top: 70,
                    bottom: 70,
                    backgroundColor: '#fff',
                    borderRadius: '4px',
                    border: `2px solid #f0f0f0`,
                    boxShadow: `#64646f4d 0px 7px 29px 0px`,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <p>Portal content</p>
            </div>
        ),
    },
} as ComponentMeta<typeof Portal>

const Template: ComponentStory<typeof Portal> = (args) => (
    <div>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
            malesuada quam sed urna feugiat fermentum. Cras feugiat ligula
            augue, ac consectetur nulla pretium vel. Etiam nulla lacus, lobortis
            pretium euismod ac, dapibus a massa. Maecenas et arcu viverra est
            lacinia pharetra sit amet eget lectus. Curabitur gravida mollis nisl
            in facilisis. Donec quis cursus nisi, vel blandit neque. Mauris
            hendrerit lacus a augue blandit tempus. Etiam faucibus erat
            vulputate augue lobortis, id volutpat sapien congue. Pellentesque
            porttitor, diam vitae vulputate fermentum, ex dolor hendrerit purus,
            vel fermentum tortor turpis eu ante. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae; Cras
            sagittis condimentum lectus, eget tristique erat.
        </p>
        <Portal {...args} />
    </div>
)

export const Default = Template.bind({})
