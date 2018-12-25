<?php
/**
* @copyright (c) 2018 ZWYang Limited <https://www.postgraduate.top>
* @license GNU General Public License, version 2 (GPL-2.0)
*
*/

namespace hellohappy\showphotofortencentcos;

/**
* show the photoes for TencentCOS extension when you click the thumbnail rather then download the photoes
* this may work if you use the AWS S3 extension
*/
class ext extends \phpbb\extension\base
{
	const PHPBB_MIN_VERSION = '3.1.0';

	/**
	 * Check whether or not the extension can be enabled.
	 * The current phpBB version should meet or exceed
	 * the minimum version required by this extension:
	 *
	 * @return bool
	 */
	public function is_enableable()
	{
		$config = $this->container->get('config');
		return phpbb_version_compare($config['version'], self::PHPBB_MIN_VERSION, '>=');
	}
}
