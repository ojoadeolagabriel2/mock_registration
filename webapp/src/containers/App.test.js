import React from 'react';
import { configure , mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';
import '@babel/polyfill';


configure({ adapter: new Adapter() });

const PROPOSITION = 'proposition';
const PROPOSITION_VALUE = 'starspins';

describe('Given an App component', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(<App proposition="starspins" trackEvent={() => console.log('done!')} />);
    });

    describe('is renderered', () => {
        it('user is presented with proposition: '.concat(PROPOSITION_VALUE), () => {
            expect(wrapper.prop(PROPOSITION)).toEqual(PROPOSITION_VALUE);
        });
    });
});
