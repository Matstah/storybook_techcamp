import type { Meta, StoryObj } from '@storybook/angular/';
import { LoginMaskComponent } from '../app/components/login-mask/login-mask.component';
import { FormsModule } from '@angular/forms';

const meta: Meta<LoginMaskComponent> = {
    title: 'Components/LoginMaskComponent',
    component: LoginMaskComponent,
};



export default meta;
type Story = StoryObj<LoginMaskComponent>;

export const Primary: { args: { label: string; primary: boolean } } = {
    args: {
        primary: true,
        label: 'Button',
    },
};

export const UserInput: { args: { label: string; primary: boolean } } = {
    args: {
        primary: true,
        label: 'Test',
    },
};