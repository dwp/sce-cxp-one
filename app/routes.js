const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

module.exports = router

// Branching your-contact-channels
router.post('/e-one/your-contact-channels', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const contactChannel = req.session.data['contact-channel']

  if (contactChannel === 'telephone') {
    res.redirect('/e-one/telephone-information')
  }

  else if (contactChannel === 'dss-signin') {
    res.redirect('/e-one/benefit-summary')
  }

  else if (contactChannel === 'chat-bots') {
    res.redirect('/e-one/webchat-service')
  }

    else if (contactChannel === 'yes-i-found-info') {
      res.redirect('/e-one/start')
    }
    else if (contactChannel === 'telephone-end') {
      res.redirect('/e-one/telephone-information-end')
    }

})
