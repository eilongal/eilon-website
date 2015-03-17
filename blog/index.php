<?php
define('IN_BLOG', true);
define('PATH', '');
include('includes/miniblog.php');
?>

<div class="wrapper">

	
	<?=$miniblog_posts?>
	
	<div class="navigation">
		<? if(!$single) { ?>
			<? if($miniblog_previous) {	?> <p class="previous-link"><?=$miniblog_previous?></p>	<? } ?>
			<? if($miniblog_next) {	?>	<p class="next-link"><?=$miniblog_next?></p> <? } ?>
		<? } ?>
		<? if($single) { ?>
			<!-- <p class="previous-link"><a href="<?=$config['miniblog-filename']?>">&laquo; return to posts</a></p> !-->
		<? } ?> 
		<div class="clear"></div>
	</div>
</div>