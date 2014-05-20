/**
 * Blog
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  attributes: {
      title: {
          type: 'string',
          minLength: 1,
          maxLength: 15,
          unique: true
      },
      content: {
          type: 'string',
          minLength: 1,
          maxLength: 2000
      },
      tags: {
          type: 'array'
      }
  }

};
