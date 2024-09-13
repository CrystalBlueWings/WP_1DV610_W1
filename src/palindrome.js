const palindromes = ['Anna',
    'Radar',
    'Rotavator',
    'Malayalam',
    'Racecar',
    'Level',
    'Madam',
    'Refer',
    'No lemon, no melon',
    'A Santa at NASA',
    'JavaScript',
    'Programmering',
    'Kaffe',
    'Express',
    'Utveckling',
    'ChatGPT',
    'Stockholm',
    'Dataanalys',
    'Maskininlärning',
    'Hej, världen!'
]
/**
 * Function that checks if a word is a palindrome or not.
 *
 * @param {String} phrase The word to check.
 * @returns {boolean} True/false depending on the word.
 */
export function checkPalindromes (phrase) {
    // Convert the phrase to lowercase.
    const lowercasePhrase = phrase.toLowerCase()

    // Separate phrase into substrings containing each letter from the phrase.
    // Return array with all of the substrings.
    const splitPhrase = lowercasePhrase.split('')

    // Reverse the substrings in the splitPhrase array.
    const reversedPhrase = splitPhrase.reverse()

    // Join all substrings into one complete phrase.
    const joinedReversedPhrase = reversedPhrase.join('')

    // Compare original phrase with reveresed phrase.
    // Return true if palindrome. Otherwise false.
    return lowercasePhrase === joinedReversedPhrase

}

// Ta bort alla icke-bokstäver