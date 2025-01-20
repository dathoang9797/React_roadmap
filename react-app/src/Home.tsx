import React from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Count } from "@src/components/Count";
import { Todo } from './components/Todo';
import { CounterStore } from '@src/Store/CountStore';
import { Theme } from "@radix-ui/themes";
import { Flex, Text, Button } from "@radix-ui/themes";
import { TimerView } from './components/TimeView';
import "@radix-ui/themes/styles.css";


// function reducer(state: { count: number }, action: { type: string }) {
//     if (action.type === "incremented_age") {
//         const countUpdate = state.count++;
//         state = { ...state, count: countUpdate }
//     }

//     return state;
// }

const people = [{
    id: 0,
    name: 'Creola Katherine Johnson',
    profession: 'mathematician',
    accomplishment: 'spaceflight calculations',
    imageId: 'MK3eW3A'
}, {
    id: 1,
    name: 'Mario José Molina-Pasquel Henríquez',
    profession: 'chemist',
    accomplishment: 'discovery of Arctic ozone hole',
    imageId: 'mynHUSa'
}, {
    id: 2,
    name: 'Mohammad Abdus Salam',
    profession: 'physicist',
    accomplishment: 'electromagnetism theory',
    imageId: 'bE7W1ji'
}, {
    id: 3,
    name: 'Percy Lavon Julian',
    profession: 'chemist',
    accomplishment: 'pioneering cortisone drugs, steroids and birth control pills',
    imageId: 'IOjWm71'
}, {
    id: 4,
    name: 'Subrahmanyan Chandrasekhar',
    profession: 'astrophysicist',
    accomplishment: 'white dwarf star mass calculations',
    imageId: 'lrWQx8l'
}];


export const Home = () => {
    // const [state, dispatch] = useReducer(reducer, { count: 0 });
    const { count, increase } = CounterStore.getState();

    const chemists = people.filter(person =>
        person.profession === 'chemist'
    );

    const listItems = chemists.map(person =>
        <React.Fragment key={person.id}>
            <img
                src={getImageUrl(person)}
                alt={person.name}
            />
            <p>
                <b>{person.name}:</b>
                {' ' + person.profession + ' '}
                known for {person.accomplishment}
            </p>
        </React.Fragment>
    );

    const onClick = () => {
        // dispatch({ type: 'incremented_age' });
        increase();
    }

    function getImageUrl(person: {
        id: number;
        name: string;
        profession: string;
        accomplishment: string;
        imageId: string;
    }) {
        return (
            'https://i.imgur.com/' +
            person.imageId +
            's.jpg'
        );
    }

    return (
        <Theme
            accentColor="crimson"
            grayColor="sand" radius="large"
            scaling="95%"
        >
            <Flex direction="column" gap="2">
                <Text>Hello from Radix Themes :)</Text>
                <Button>Let's go</Button>
            </Flex>
            <TimerView />
            <Todo />
            <div>
                <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Vite + React</h1>
            <Count count={count} onClick={onClick} />
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
            <ul>{listItems}</ul>
        </Theme>
    )
}
