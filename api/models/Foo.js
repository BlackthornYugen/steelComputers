/**
 * Foo
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {

    attributes: {

        name: {
          type: 'string',
          maxLength: 50,
          minLength: 2,
          unique: true
        },

        health: {
          type: 'integer',
          max: 999,
          min: 0
        },

        mana: {
          type: 'integer',
          max: 999,
          min: 0
        }

    }

};
