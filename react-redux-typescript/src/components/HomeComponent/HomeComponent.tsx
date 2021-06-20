import { Link } from "react-router-dom";
import { appendClassNameModifier } from '../../helpers/helpers';

export function HomeComponent () {
  const homeClassName = 'home';
  const homeTitleClassName = homeClassName + '__title';
  const homeTextClassName = homeClassName + '__text';
  const homeLinkClassName = homeClassName + '__link';

  const modifiedHomeLinkClassName = appendClassNameModifier(homeTextClassName, 'link');
  const modifiedHomeTextClassName = appendClassNameModifier(homeTextClassName, 'xl');

  return (
    <div className={ homeClassName }>
			<span className={ homeTitleClassName }>
				Hello!
			</span>
      <span className={ homeTextClassName }>
				This is a live version of Pizza Delivery App interview task.
			</span>
      <span className={ homeTextClassName }>
				You can checkout the
        <a
          className={ modifiedHomeLinkClassName }
          href={ 'https://github.com/andrey-lazarev/pizza-delivery-interview-task' }
          rel="noopener noreferrer"
          target="_blank"
        >
					Github repository
				</a>
			</span>
      <span className={ modifiedHomeTextClassName }>
				OR
			</span>
      <Link
        to='/menu'
        className={ homeLinkClassName }
      >
        Go straight to the menu
      </Link>
    </div>
  );
}
