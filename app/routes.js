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

    else if (contactChannel === 'no-i-did-not-found-info') {
      res.redirect('/e-one/did-you-get-all-info-no')
    }
    else if (contactChannel === 'no-i-do-not') {
      res.redirect('/e-one/thank-you-close')
    }

})

router.post('/e-one/contact-channels', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const contactChannel = req.session.data['contact']

  if (contactChannel === 'webchat') {
    res.redirect('/e-one/webchat-service')
  }

  else  {
    res.redirect('/e-one/thank-you')
  }


})
