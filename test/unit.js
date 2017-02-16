import React from 'react'
var test = require('tape')

import { likeButton } from '../jsx/Page.jsx'

test('Button can only be hit once', function (test) {
  test.equal(likeButton, "somediv", "button hit")
  test.end()
})
