import { storiesOf } from "@storybook/react";
import React from "react";
import Button from "../src/components/button/button";

storiesOf("Button", module).add("with text", () => (
    <Button id='btn_1' description='click me!'/>
));

storiesOf("Button", module).add("with no text", () => (
    <Button id='btn_1' description=''/>
));