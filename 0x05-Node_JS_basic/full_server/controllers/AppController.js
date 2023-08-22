/**
 * Contains the miscellaneous route handlers.
 * @author Essien Alex-bennet Elijah <https://github.com/Lexykeyz>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
