<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<script type="text/javascript">
	app.controller('controller', function ($scope,$http,$window) {
		$scope.isBigResolution = true;
		
		$(window).resize(function() {
	      	$scope.$apply(function() {
	        	$scope.windowWidth = $(window).width();
	        	if ($scope.windowWidth < 1000) {
	        		$scope.isBigResolution = false;
				} else {
					$scope.isBigResolution = true;
				}
	      	});
		});
		
		$scope.constellationList = [{'constellation':'Aries', 'chName':'牡羊座', 'timeInterval':'3/21～4/20'},{'constellation':'Taurus', 'chName':'金牛座', 'timeInterval':'4/21～5/20'}
			,{'constellation':'Gemini', 'chName':'雙子座', 'timeInterval':'5/21~6/20'},{'constellation':'Cancer', 'chName':'巨蟹座', 'timeInterval':'6/21～7/21'}
			,{'constellation':'Leo', 'chName':'獅子座', 'timeInterval':'7/22～8/22'},{'constellation':'Virgo', 'chName':'處女座', 'timeInterval':'8/23～9/22'}
			,{'constellation':'Libra', 'chName':'天秤座', 'timeInterval':'9/23～10/22'},{'constellation':'Scorpio', 'chName':'天蠍座', 'timeInterval':'10/23～11/22'}
			,{'constellation':'Sagittarius', 'chName':'射手座', 'timeInterval':'11/23～12/21'},{'constellation':'Capricorn', 'chName':'摩羯座', 'timeInterval':'12/22～1/19'}
			,{'constellation':'Aquarius', 'chName':'水瓶座', 'timeInterval':'1/20～2/18'},{'constellation':'Pisces', 'chName':'雙魚座', 'timeInterval':'2/19～3/20'}];
		
		
		$scope.react = function(id) {
			$scope.content = null;
			if (id == 'Aries') {
				$scope.content = '希臘中部波地亞地方的阿塔瑪斯國國王阿塔瑪斯和妻子涅斐勒有一段不愉快的婚姻，於是另娶底比斯國王卡德摩斯之女伊諾為妻，';
				$scope.content += '可是伊諾虐待阿塔瑪斯的兩個孩子弗里克索斯、赫勒，又將城內的禾稈燒清。阿塔瑪斯請求神諭，然而伊諾從中作梗，令阿塔瑪斯以為必須犧牲兒子弗里克索斯方可消弭惡運。<br>';
				$scope.content += '阿塔瑪斯帶弗里克索斯到拉菲斯丹山頂，準備將他獻給宙斯。前妻涅斐勒差遣金羊克律索馬羅斯救弗里克索斯，弗里克索斯逃脫並帶著雙胞胎妹妹赫勒騎上羊身飛向東面的科爾基斯，';
				$scope.content += '怎料赫勒一時大意脫手直墜海中。到了科爾基斯，弗里克索斯把金羊送給科爾基斯國王埃厄忒斯，埃厄忒斯也禮尚往來把女兒卡爾基奧佩賜予弗里克索斯。<br>';
				$scope.content += '後來，弗里克索斯父親的兄弟克瑞透斯之子珀利阿斯奪去侄兒伊阿宋的皇位，弗里克索斯死後，鬼魂回到希臘纏著珀利阿斯，珀利阿斯無可奈何推搪若伊阿宋找到金羊毛，就會讓位。這引致後來伊阿宋乘阿格號之歷險。<br>';
				$scope.content += '伊阿宋千辛萬苦到達科爾基斯，問埃厄忒斯金羊毛之所在卻被拒諸門外，幸好埃厄忒斯之女美狄亞暗戀伊阿宋。入夜，美狄亞引走看守之巨蛇，伊阿宋則乘機偷走金羊毛，而後來金羊毛就被掛在宙斯之神殿前。<br>';
				$scope.content += '後來宙斯將金羊提升到天上，便成為了白羊星座。';
			} else if (id == 'Taurus') {
				$scope.content = '金牛座是宙斯的化身。傳說宙斯喜歡阿戈諾爾（Agenor）之女歐羅芭（Europa），她常在蘇爾沙灘上玩，宙斯便要赫耳墨斯（Hermes）在附近的一個小丘上放牛，宙斯就化身成牛混在牛群中，趁機靠近她。由於此牛十分雪白、牛角閃閃發光，歐羅芭深被牠吸引，白牛示意她騎上去，她無知中計，牠載歐羅芭渡過海洋，游到深水的地方，迫使歐羅芭抱著牠，終於在克里特島上露出真面目，宙斯得歐羅芭歡心，她也替宙斯生了多個兒子，而宙斯為紀念此事，金牛座是其化身的牛，並以歐羅芭的名字來命名大陸 - 歐羅芭洲，就是歐洲。<br>';
				$scope.content += '星圖只顯示牛的上半身，下半身在水中，並不可見。<br>';
				$scope.content += '金牛座七姊妹星團（Pleiades）的故事：七姊妹其實是阿特拉斯（Atlas）和普勒俄涅（Pleione）的七個女兒，分別是阿爾庫俄涅（Alcyone），斯忒羅珀（Sterope），刻萊諾（Calaeno），厄勒克特拉（Electra），邁亞（Maia），墨羅佩（Merope）及塔宇革忒（Taygete），阿爾庫俄涅及刻萊諾給波塞冬誘姦，最大的女兒邁亞替宙斯誕下了赫耳墨斯，並且成為阿卡斯（Arcas）的後母，厄勒克特拉替宙斯生下特洛伊的建城者達爾達諾斯（Dardanus），塔宇革忒替宙斯生下斯巴達的建城者拉刻代蒙（Lacedaemon），斯忒羅珀被戰神阿瑞斯強暴並誕下皮薩（Pisa）皇俄諾瑪俄斯（Oenomaus），墨羅佩則嫁給了凡人、風神埃俄羅斯的兒子西敘福斯。七姊妹星團中只可看到六顆，一說墨羅佩由於嫁予凡人，故光芒最弱；一說是因為厄勒克特拉用手掩蓋自己的眼睛，不忍見到特洛伊的滅亡，可是事實上最暗的星其實是斯忒羅珀。';
			} else if (id == 'Gemini') {
				$scope.content = '雙子座代表的是希臘神話中的天神宙斯與斯巴達王后勒達所生的孿生子即(雙胞胎)卡斯托耳和波魯克斯（合稱狄俄斯庫里兄弟），兩人一生充滿無數的英雄壯舉。但他們因和伊達斯和林叩斯分配戰利品時產生矛盾，互相反目成仇並開始決鬥，結果林叩斯被卡斯托耳殺死，卡斯托耳被伊達斯殺死，伊達斯又被波魯克斯殺死。 波魯克斯向宙斯哀求如果能讓卡斯托耳復活，他寧願放棄自己的不死之身。宙斯被兄弟倆的友愛精神所感動，將他們提升到天界，成為雙子座。';
			} else if (id == 'Cancer') {
				$scope.content = '當宙斯的私生子海克力士迎戰勒拿湖的九頭大蛇（長蛇座）時，海克力士的死敵希拉派出巨蟹從沼澤竄出並偷偷攻擊海克力士的腳，海克力士一怒之下將其踩成碎片，事後希拉撿起巨蟹，升上天空，成為巨蟹座。';
			} else if (id == 'Leo') {
				$scope.content = '希臘神話中，赫拉克勒斯是宙斯與凡人的私生子，他天生具有無比的神力，天后赫拉也因此視他為眼中釘，千方百計想殺死赫拉克勒斯，但一直未能如願。赫拉詛咒讓赫拉克勒斯發瘋打死自己三個無辜的兒子。赫拉克勒斯醒後十分懊惱。為了贖罪他決定以苦行來洗清自己的罪孽，他來到邁錫尼為國王歐律斯透斯（Eurystheus）服役十二年。赫拉克勒斯在十二年中完成了十二項英勇業績，其中有一項任務就是要殺死涅墨亞獅子。<br>';
				$scope.content += '涅墨亞獅子是半人半蛇的妖怪厄喀德娜生下的，到處吞食生靈。赫拉克勒斯拿著他的弓箭和他常用的木棒，來到涅墨亞山谷，找到了這頭獅子，先用弓箭射他，箭卻反彈回來，再用木棒打他，粗木棒卻碎裂，原來涅墨亞獅子是刀槍不入的，無論是用石器，銅器還是鐵器，都無法傷害到它。赫拉克勒斯只好和獅子肉搏，過程十分慘烈，最後使盡全身力氣，終於徒手將那獅子給活活掐死。之後赫拉克勒斯利用獅子的腳爪將獅子的皮剝下，獅頭戴在頭上作為頭盔，獅皮則披在身上作為盔甲。這個便是我們經常看見的赫拉克勒斯的形象。<br>';
				$scope.content += '後來宙斯為紀念赫拉克勒斯的豐功偉績，將被他殺死的涅墨亞發獅子升到空中，變成了獅子座。';
			} else if (id == 'Virgo') {
				$scope.content = '處女座是希臘正義女神阿斯特莉亞的象徵，亦為農業女神。在神話中，處女座是大地女神得墨忒耳（Demeter）的化身，有說是其女兒珀耳塞福涅（Persephone）的化身。聖經記載的掌管生產的邪神亞斯他錄可能就是指她。';
				$scope.content += '人間管理穀物的農業之神、希臘的大地之母得墨忒耳是宙斯的姊姊，有一個美麗的獨生女珀耳塞福涅，她是春天的燦爛女神，只要她輕輕踏過的地方，都會開滿嬌艷欲滴的花朵。有一天她和同伴正在山谷中的一片草地上摘花，突然間，她看到一朵銀色的水仙，甜美的利味飄散在空氣中，珀耳塞福涅想：「它比我任何一朵花都漂亮！」美得光彩照人，於是她遠離同伴偷偷地走近，伸手正要碰到花兒，突然，地底裂開了一個洞，一輛馬車由兩匹黑馬拉著，衝出地面，原來是冥王哈底斯（Hades），他因愛慕「最美的春神」珀耳塞福涅，設下詭計擄走了她。<br>';
				$scope.content += '珀耳塞福涅的呼救聲迴蕩在山谷、海洋之間，當然，也傳到了母親得墨忒耳的耳中，得墨忒爾非常的悲傷，她拋下了待收割的穀物，飛過千山萬水去尋找女兒。人間少了大地之母，種子不再發芽，肥沃的土地結不出成串的麥穗，人類都要餓死了，宙斯看到這個情形只好命令哈得斯放了珀耳塞福涅，哈得斯不得不服從宙斯，但暗中卻生詭計，臨走前給珀耳塞福涅一顆果子——地獄石榴，珀耳塞福涅吃了這顆果子便必須回到陰暗惡臭的地獄裡。<br>';
				$scope.content += '宙斯沒有辦法，只好對哈得斯說：「一年之中，你將只有四分之一的時間可以和珀耳塞福涅在一起」。從此以後只要大地結滿冰霜，寸草不生的時候，人們就知道這是因珀耳塞福涅又去了地府。處女座象徵著春神珀耳塞福涅的美麗與純潔，母親養育的麥穗，也成為她手持之物。<br>';
				$scope.content += '另有一說，處女座代表的是正義女神阿斯特莉亞，在對人類感到失望後回到天上變成處女座。';
			} else if (id == 'Libra') {
				$scope.content = '天秤座是希臘神話中的正義女神阿斯特莉亞在為人類所做善惡裁判時所用的天平，阿斯特莉亞一隻手持天平，一隻手握斬除邪惡的劍。為求公正，所以眼睛皆矇著。<br>';
				$scope.content += '從前的眾神和人類是和平共處於大地上，神雖擁有永遠的生命，但人類壽命有限。因此寂寞的神只有不斷創造人類，然而那時的人好爭鬥，惡業橫行，眾神在對人類失望之餘回到天上。<br>';
				$scope.content += '只有阿斯特莉亞女神捨不得回去而留在世界上，教人為善。儘管如此，人類仍繼續墮落，於是戰爭掀起，開始了打打殺殺。最後連阿斯特莉亞也放棄人類而回到天上。而天空就高掛著鍾愛正義和平公正的天秤座。';
			} else if (id == 'Scorpio') {
				$scope.content = '天蠍神話之一——太陽神阿波羅的兒子--法厄同，天生美麗而性感，他自己也因此感到自負，態度總是傲慢而無禮，太過好強的個性常使他無意間得罪了不少人。<br>';
				$scope.content += '有一天，有個人告訴法厄同說：「你並非太陽神的兒子！」說完大笑揚長而去，好強的法厄同怎能吞得下這口氣，於是便問自己的母親：「我到底是不是阿波羅的兒子呢？」但是不管母親如何再三保證他的確就是阿波羅所生，法厄同仍然不相信他的母親，於是說：「取笑你的人是宙斯的兒子，地位很高，如果仍然不相信，那麼去問太陽神阿波羅自己吧！」阿波羅聽了自己兒子的疑問，笑著說：「別聽他們胡說，你當然是我的兒子！」法厄同仍執意不信，其實他當然知道太陽神從不說謊，可是他卻另有目的—要求駕駛父親的太陽車，以證明自己就是阿波羅的兒子。「這怎麼行？」阿波羅大驚，太陽是萬物生息的主宰，一不小心就會釀巨禍，但拗不過法厄同，阿波羅正說明著如何在一定軌道駕駛太陽車時，法厄同心高氣傲，聽都沒聽立刻跳上了車，疾馳而去。結果當然很慘，地上的人們、動物、植物不是熱死就是凍死，也亂了時間，弄得天錯地暗，怨聲載道。<br>';
				$scope.content += '眾神們為了遏止法厄同，由天后赫拉放出一支毒蠍，毒蠍向法厄同攻擊，法厄同根本來不及反應，毒蠍就咬住了法厄同的腳踝，而宙斯則用可怕的雷霆閃電擊中了法厄同，只見法厄同慘叫一聲墮落到地面，法厄同最終死了，人間又恢復了寧靜，為了紀念那隻也被閃電擊斃的毒蠍，這個星座就被命名為「天蠍座」。<br>';
				$scope.content += '天蠍神話之二——據說它是赫拉克勒斯在山澗中殺死的一隻大毒蠍子。還有一個故事說是獵人俄里翁過於傲慢，誇口說天下沒有一個動物是他的對手，天后赫拉就派毒蠍子咬傷了他的腳，使他中毒而死。所以它們到了天上以後也互相為敵，遠居天空的兩邊，每當天蠍座從東方地平線上升起時，獵戶俄里翁便從西方匆匆離去。';
			} else if (id == 'Sagittarius') {
				$scope.content = '在希臘神話中，射手座的箭對著位於它前方的天蠍座的胸，射手座在天上是為了給去取金羊毛的伊阿宋指路，古希臘人將射手座與薩杜恩（半人半羊）以及克洛托斯聯繫起來。羅馬人卻將他認為是優雅而智慧的喀戎，這導致人們常常把它與南天的半人馬座混淆，然而這兩種生物有一個明顯的區別，射手座是一名獵手，這可以追溯到美索不達米亞的箭神涅伽爾（Nergal），而他與暴躁的戰神和火神伊拉（Irra）有關。';
			} else if (id == 'Capricorn') {
				$scope.content = '希臘神話中，有位吹著角笛的牧羊神，叫做潘恩。他的相貌醜陋，有著山羊角、羊蹄和山羊鬍子的神。而他的父親就是諸神的傳信者赫密斯。<br>';
				$scope.content += '有一次潘恩在尼羅河畔參加諸神的宴會，並在宴會上為諸神演奏，不料演奏中，他的笛聲居然將上古時代的怪物給引來了。此時諸神紛紛化身逃走，而潘恩因為正在演奏，來不及應變，便在慌張中跳入尼羅河中，想化身為魚逃走，不過實在是太匆忙了，以致於變身並不完全，結果泡在水中的下半身變成了魚尾巴，而上半身仍維持原有的山羊模樣。宙斯在天界看到了潘恩這個模樣，覺得非常有趣，便將這半羊半魚的樣子化做天上的星座。';
			} else if (id == 'Aquarius') {
				$scope.content = '寶瓶座的形像是一個持著瓶子在斟酒的美少年伽倪墨得斯，據說他是特洛伊的王子。有一天，他替父親看羊時，宙斯在天空經過，一見伽倪墨得斯即對他迷戀，宙斯變身成一隻老鷹擄走伽倪墨得斯到奧林匹斯山，（有些版本說宙斯派遣一隻老鷹捉走伽倪墨得斯），此鷹就是天鷹座，而伽倪墨得斯從此成為宙斯身旁的倒酒僮。';
			} else if (id == 'Pisces') {
				$scope.content = '希臘神話中雙魚座代表的是阿佛洛狄忒和厄洛斯在水中的化身。阿佛洛狄忒為了逃避大地女神蓋亞之子巨神提豐攻擊而變成魚躲在尼羅河（一說幼發拉底河）。之後她發現忘記帶上自己的兒子厄洛斯一起逃走，於是又上岸找到厄洛斯。為防止與兒子失散，她將兩人腳綁在一起，隨後兩人化為魚形，潛進河中。事後宙斯將阿佛洛狄忒首先化身的魚提升到空中成為南魚座，而她和厄洛斯化身的綁在一起的兩條魚則稱為雙魚座。';
			}
		}
		
		
		
 	});
</script>