import React from 'react';
import {render as rtlRender, screen} from '@testing-library/react';
import PhoneDetailComponent from './PhoneDetailComponent';
const render = (ui) => {
    return rtlRender(ui);
}
describe('magic',()=>{
    it('should work',()=>{
        render(<PhoneDetailComponent/>)
        expect(1).toEqual(2);
    });
})