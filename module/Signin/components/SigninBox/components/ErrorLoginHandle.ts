export function SignInErrorHandle(message: string) {
  if (message.indexOf('invalid-email') != -1) return 'INVALID EMAIL'
  else if (message.indexOf('user-not-found') != -1) return 'User NOT found!'
  else if (message.indexOf('wrong-password') != -1) return 'Wrong password!'
  else if (message.indexOf('too-many-requests') != -1)
    return 'Too many requests try again later or reset your password.'
  else return 'Unknown error'
}
