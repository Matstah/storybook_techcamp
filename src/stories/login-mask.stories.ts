import type { Meta, StoryObj } from '@storybook/angular/';
import { LoginMaskComponent } from '../app/components/login-mask/login-mask.component';
import { FormsModule } from '@angular/forms';
import {userEvent, within} from "@storybook/test";
import {action} from "@storybook/addon-actions";
import {expect} from "@storybook/jest";

const meta: Meta<LoginMaskComponent> = {
    title: 'Components/LoginMaskComponent',
    component: LoginMaskComponent,
    tags: ['autodocs'],
    argTypes: {
        formSubmitted: { action: 'formSubmitted' }, // Add action to capture the formSubmitted event
    },

};

export default meta;
type Story = StoryObj<LoginMaskComponent>;

// Empty Form story
export const Primary: Story = {};

// Filled Form story with simulated user interactions
export const FilledForm: Story = {
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        // Simulate typing the username and password
        await userEvent.type(canvas.getByTestId('username'), 'email@provider.com');
        await userEvent.type(canvas.getByTestId('password'), 'a-random-password');

        // Simulate clicking the submit button
        await userEvent.click(canvas.getByRole('button'));
    },
};


export const FilledFormNoPw: Story = {
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        // Simulate typing the username and password
        await userEvent.type(canvas.getByTestId('username'), 'email@provider.com');

        // Simulate clicking the submit button
        await userEvent.click(canvas.getByRole('button'));


    },
};


