import { describe, expect, it } from "vitest";
import config from "./config";
import config_user from "./config_user";

describe('config_user', () => {
    it('has configured value', () => {
        config.set_fruit('blueberry');
        expect(config_user()).toBe('blueberry');
    });
});