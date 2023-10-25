var chxm1023 = JSON['parse']($response['body']);
const ua = $request['headers']['User-Agent'] || $request['headers']['user-agent'];
const bundle_id = chxm1023['receipt']['bundle_id'] || chxm1023['receipt']['Bundle_Id'];
const list = {
    'OrderGenerator': {
        'cm': 'sjbla',
        'hx': 'hxpda',
        'version': '1',
        'id': 'com.killhand.ordergenerator.yearly',
        'latest': 'chxm1023'
    },
    'GenerateAllOrdersTool': {
        'cm': 'sjbla',
        'hx': 'hxpda',
        'version': '2030',
        'id': 'Order_Vip_010',
        'latest': 'chxm1023'
    },
    'MoMoShouZhang': {
        'cm': 'sjbla',
        'hx': 'hxpda',
        'version': '1',
        'id': 'shunchangshouzhangQuarterlyPlus',
        'latest': 'chxm1023'
    },
    'Mindkit': {
        'cm': 'sjbla',
        'hx': 'hxpda',
        'version': '207',
        'id': 'mindkit_yearly',
        'latest': 'chxm1023'
    },
    'DailySpending': {
        'cm': 'sjbla',
        'hx': 'hxpda',
        'version': '2011',
        'id': 'com.xxtstudio.dailyspending.year',
        'latest': 'chxm1023'
    },
    'Miary': {
        'cm': 'sjblb',
        'hx': 'hxpda',
        'version': '48',
        'id': 'lifetime_sub',
        'latest': 'chxm1023'
    },
    'ChatImage': {
        'cm': 'sjbla',
        'hx': 'hxpda',
        'version': '38',
        'id': 'com.hk.zhongwenhuatu.year',
        'latest': 'chxm1023'
    },
    'Noted': {
        'cm': 'sjblb',
        'hx': 'hxpda',
        'version': '742',
        'id': 'com.digitalworkroom.noted.plus.lifetime',
        'latest': 'chxm1023'
    },
    'BingQiTools': {
        'cm': 'sjbla',
        'hx': 'hxpda',
        'version': '1',
        'id': 'bingqi_e2',
        'latest': 'chxm1023'
    },
    'AnyDown': {
        'cm': 'sjblb',
        'hx': 'hxpda',
        'version': '1',
        'id': 'com.xiaoqi.down.forever',
        'latest': 'chxm1023'
    },
    'Reader': {
        'cm': 'sjblb',
        'hx': 'hxpda',
        'version': '2',
        'id': 'com.xiaoqi.reader.forever',
        'latest': 'chxm1023'
    },
    'com.bestmusicvideo.formmaster': {
        'cm': 'sjbla',
        'hx': 'hxpda',
        'version': '10',
        'id': 'com.form.1yearvip',
        'latest': 'chxm1023'
    },
    'ExcelSpreadSheetsWPS': {
        'cm': 'sjbla',
        'hx': 'hxpda',
        'version': '32',
        'id': 'com.turbocms.SimpleSpreadSheet.viponeyear',
        'latest': 'chxm1023'
    },
    'XinQingRiJi': {
        'cm': 'sjbla',
        'hx': 'hxpda',
        'version': '2',
        'id': 'zhiwenshouzhangQuarterlyPlus',
        'latest': 'chxm1023'
    },
    'Nutrilio': {
        'cm': 'sjbla',
        'hx': 'hxpda',
        'version': '51',
        'id': 'net.nutrilio.one_year_plus',
        'latest': 'chxm1023'
    },
    'Pixiu%E8%AE%B0%E8%B4%A6': {
        'cm': 'sjbla',
        'hx': 'hxpda',
        'version': '20230919',
        'id': 'com.RuoG.Pixiu.VIPYear',
        'latest': 'chxm1023'
    },
    'AIHeader': {
        'cm': 'sjbla',
        'hx': 'hxpda',
        'version': '1.0.0.33',
        'id': 'com.ai.avatar.maker.month.3dayfree',
        'latest': 'chxm1023'
    },
    'MoodTracker': {
        'cm': 'sjblb',
        'hx': 'hxpda',
        'version': '21',
        'id': 'co.vulcanlabs.moodtracker.lifetime2',
        'latest': 'chxm1023'
    },
    'com.dandelion.Routine': {
        'cm': 'sjblb',
        'hx': 'hxpda',
        'version': '364',
        'id': 'membership',
        'latest': 'chxm1023'
    },
    'YSBrowser': {
        'cm': 'sjblb',
        'hx': 'hxpda',
        'version': '5',
        'id': 'com.ys.pro',
        'latest': 'chxm1023'
    },
    'org.zrey.metion': {
        'cm': 'sjbld',
        'hx': 'hxpda',
        'version': '1',
        'id': 'org.zrey.metion.pro',
        'ids': 'org.zrey.metion.main',
        'latest': 'chxm1023'
    },
    'ZenJournal': {
        'cm': 'sjbla',
        'hx': 'hxpda',
        'version': '218',
        'id': 'zen_pro',
        'latest': 'chxm1023'
    },
    '%E5%80%92%E6%94%BE%E6%8C%91%E6%88%98': {
        'cm': 'sjbla',
        'hx': 'hxpda',
        'version': '29',
        'id': 'com.abighead.ReverseChallenge.iap.pro.year',
        'latest': 'chxm1023'
    },
    'com.visualmidi.app.perfectpiano.Perfect-Piano': {
        'cm': 'sjbla',
        'hx': 'hxpda',
        'version': '63',
        'id': 'auto_renew_monthly_subscription',
        'latest': 'chxm1023'
    },
    'Straw': {
        'cm': 'sjbla',
        'hx': 'hxpda',
        'version': '1',
        'id': 'com.1year.eyedropper',
        'latest': 'chxm1023'
    },
    'vibee': {
        'cm': 'sjbla',
        'hx': 'hxpda',
        'version': '3',
        'id': 'com.vibee.year.bigchampagne',
        'latest': 'chxm1023'
    },
    'Lister': {
        'cm': 'sjbla',
        'hx': 'hxpda',
        'version': '1.0.1.1',
        'id': 'com.productlab.lister.yearly',
        'latest': 'chxm1023'
    },
    'DrumPads': {
        'cm': 'sjblb',
        'hx': 'hxpda',
        'version': '6392',
        'id': 'com.gismart.drumpads.pro_lifetime_30',
        'latest': 'chxm1023'
    },
    'Smart%20AI': {
        'cm': 'sjbla',
        'hx': 'hxpda',
        'version': '657',
        'id': 'com.photoslab.ai.writerassistant.year',
        'latest': 'chxm1023'
    },
    'WaterMaskCamera': {
        'cm': 'sjbla',
        'hx': 'hxpda',
        'version': '1.2.0.102',
        'id': 'com.camera.watermark.yearly.3dayfree',
        'latest': 'chxm1023'
    },
    'ColorPaint': {
        'cm': 'sjbla',
        'hx': 'hxpda',
        'version': '1',
        'id': 'coloring.app.singingfish.year',
        'latest': 'chxm1023'
    },
    'SymbolKeyboard': {
        'cm': 'sjblb',
        'hx': 'hxpda',
        'version': '9',
        'id': 'fronts.keyboard.singingfish.one',
        'latest': 'chxm1023'
    },
    'Sudoku': {
        'cm': 'sjbla',
        'hx': 'hxpda',
        'version': '1',
        'id': 'com.singingfish.sudokugame.year',
        'latest': 'chxm1023'
    },
    'com.kuaijiezhilingdashi.appname': {
        'cm': 'sjbla',
        'hx': 'hxpda',
        'version': '2',
        'id': 'com.othermaster.yearlyvip',
        'latest': 'chxm1023'
    },
    'Clarity': {
        'cm': 'sjbla',
        'hx': 'hxpda',
        'version': '2',
        'id': 'claritymagazine',
        'latest': 'chxm1023'
    },
    'LogInput': {
        'cm': 'sjbla',
        'hx': 'hxpda',
        'version': '4253',
        'id': 'com.logcg.loginput',
        'latest': 'chxm1023'
    },
    'SoundLab': {
        'cm': 'sjbla',
        'hx': 'hxpda',
        'version': '2',
        'id': '8800',
        'latest': 'chxm1023'
    },
    'Kilonotes': {
        'cm': 'sjbla',
        'hx': 'hxpda',
        'version': '15',
        'id': 'kipa_kilonotes_quarter_subscription',
        'latest': 'chxm1023'
    },
    'YiJianKouTu': {
        'cm': 'sjbla',
        'hx': 'hxpda',
        'version': '1',
        'id': 'XiChaoYiJianKouTuPlus',
        'latest': 'chxm1023'
    },
    'FileArtifact': {
        'cm': 'sjbla',
        'hx': 'hxpda',
        'version': '1',
        'id': 'com.shengzhou.fileartifact.year',
        'latest': 'chxm1023'
    },
    'Wext': {
        'cm': 'sjblb',
        'hx': 'hxpda',
        'version': '1',
        'id': 'com.lmf.wext.life',
        'latest': 'chxm1023'
    },
    'ColorCapture': {
        'cm': 'sjbla',
        'hx': 'hxpda',
        'version': '198',
        'id': 'colorcapture.pro2',
        'latest': 'chxm1023'
    },
    'xTerminal': {
        'cm': 'sjbla',
        'hx': 'hxpda',
        'version': '186',
        'id': 'xterminal.pro2',
        'latest': 'chxm1023'
    },
    'Fotoz': {
        'cm': 'sjblb',
        'hx': 'hxpda',
        'version': '245',
        'id': 'com.kiddy.fotoz.ipa.pro',
        'latest': 'chxm1023'
    },
    'TheLastFilm': {
        'cm': 'sjbla',
        'hx': 'hxpda',
        'version': '150',
        'id': 'Filmroll_Pro_1Year',
        'latest': 'chxm1023'
    },
    'Motivation': {
        'cm': 'sjbla',
        'hx': 'hxpda',
        'version': '127',
        'id': 'com.monkeytaps.motivation.premium.year3',
        'latest': 'chxm1023'
    },
    'io.sumi.GridDiary2': {
        'cm': 'sjbla',
        'hx': 'hxpda',
        'version': '315',
        'id': 'io.sumi.GridDiary.pro.annually',
        'latest': 'chxm1023'
    },
    'Subscriptions': {
        'cm': 'sjbla',
        'hx': 'hxpda',
        'version': '434',
        'id': 'com.touchbits.subscriptions.iap.pro.yearly',
        'latest': 'chxm1023'
    },
    'com.leapfitness.fasting': {
        'cm': 'sjbla',
        'hx': 'hxpda',
        'version': '164',
        'id': 'com.leapfitness.fasting.oneyear1',
        'latest': 'chxm1023'
    },
    'WidgetBox': {
        'cm': 'sjblb',
        'hx': 'hxpda',
        'version': '27',
        'id': 'widgetlab001',
        'latest': 'chxm1023'
    },
    'LifeTracker': {
        'cm': 'sjbla',
        'hx': 'hxpda',
        'version': '202208011119',
        'id': 'com.dk.lifetracker.yearplan',
        'latest': 'chxm1023'
    },
    'Water%20Reminder': {
        'cm': 'sjbla',
        'hx': 'hxpda',
        'version': '1.9.19',
        'id': 'com.vgfit.premiumtracker.month',
        'latest': 'chxm1023'
    },
    'imgplay': {
        'cm': 'sjbla',
        'hx': 'hxpda',
        'version': '482',
        'id': 'me.imgbase.imgplay.subscriptionYearly',
        'latest': 'chxm1023'
    },
    'WaterMinder': {
        'cm': 'sjbla',
        'hx': 'hxpda',
        'version': '842',
        'id': 'waterminder.premiumYearly',
        'latest': 'chxm1023'
    },
    'HashPhotos': {
        'cm': 'sjblb',
        'hx': 'hxpda',
        'version': '23177',
        'id': 'com.kobaltlab.HashPhotos.iap.allinone.free',
        'latest': 'chxm1023'
    },
    'FileBrowser': {
        'cm': 'sjbla',
        'hx': 'hxpda',
        'version': '1',
        'id': 'com.qingcheng.filex.pro.yearly',
        'latest': 'chxm1023'
    },
    'SilProject': {
        'cm': 'sjbla',
        'hx': 'hxpda',
        'version': '84',
        'id': 'com.sm.Alina.Pro',
        'latest': 'chxm1023'
    },
    'com.chenxi.shanniankapian': {
        'cm': 'sjbla',
        'hx': 'hxpda',
        'version': '6',
        'id': 'com.chenxi.shannian.superNian',
        'latest': 'chxm1023'
    },
    'com.risingcabbage.pro.camera': {
        'cm': 'sjbla',
        'hx': 'hxpda',
        'version': '98',
        'id': 'com.risingcabbage.pro.camera.yearlysubscription',
        'latest': 'chxm1023'
    },
    'com.vitalii.water': {
        'cm': 'sjblb',
        'hx': 'hxpda',
        'version': '683',
        'id': 'com.vitalii.water.sub.premium8',
        'latest': 'chxm1023'
    },
    'co.bazaart.patternator': {
        'cm': 'sjbla',
        'hx': 'hxpda',
        'version': '65',
        'id': 'Patternator_Lock_Screen_Monthly',
        'latest': 'chxm1023'
    },
    '%E5%BD%95%E9%9F%B3%E4%B8%93%E4%B8%9A%E7%89%88': {
        'cm': 'sjbla',
        'hx': 'hxpda',
        'version': '11800',
        'id': 'com.winat.recording.pro.yearly',
        'latest': 'chxm1023'
    },
    'cn.linfei.SimpleRecorder': {
        'cm': 'sjbla',
        'hx': 'hxpda',
        'version': '5241',
        'id': 'cn.linfei.SimpleRecorder.Plus',
        'latest': 'chxm1023'
    },
    'com.maliquankai.appdesign': {
        'cm': 'sjblc',
        'hx': 'hxpdb',
        'version': '1.5.8'
    },
    'com.moji.MojiWeather': {
        'cm': 'sjbla',
        'hx': 'hxpda',
        'version': '202107301614',
        'id': 'moji.renewalmember.one',
        'latest': 'chxm1023'
    },
    'PictureScanner': {
        'cm': 'sjbla',
        'hx': 'hxpda',
        'version': '2023.05.16',
        'id': 'om.picturescanner.tool.year',
        'latest': 'chxm1023'
    },
    'BestColor': {
        'cm': 'sjbla',
        'hx': 'hxpda',
        'version': '1.3.0.1',
        'id': 'com.bestColor.tool.month',
        'latest': 'chxm1023'
    },
    'com.decibel.tool': {
        'cm': 'sjbla',
        'hx': 'hxpda',
        'version': '4',
        'id': 'decibel98free3',
        'latest': 'chxm1023'
    },
    'MeasurementTools': {
        'cm': 'sjbla',
        'hx': 'hxpda',
        'version': '1.0.0.1',
        'id': 'mesurementyearvip',
        'latest': 'chxm1023'
    },
    'TinyPNGTool': {
        'cm': 'sjbla',
        'hx': 'hxpda',
        'version': '1.0.0.1',
        'id': 'com.tinypngtool.tool.weekvip',
        'latest': 'chxm1023'
    },
    'IconChange': {
        'cm': 'sjbla',
        'hx': 'hxpda',
        'version': '2.2.0.0',
        'id': 'iconeryearvip',
        'latest': 'chxm1023'
    },
    'life.journal.diary': {
        'cm': 'sjbla',
        'hx': 'hxpda',
        'version': '35',
        'id': 'life.journal.diary.annually',
        'latest': 'chxm1023'
    },
    'com.floatcamellia.motionninja': {
        'cm': 'sjbla',
        'hx': 'hxpda',
        'version': '1',
        'id': 'com.floatcamellia.motionninja.yearlyvip',
        'latest': 'chxm1023'
    },
    'com.iuuapp.audiomaker': {
        'cm': 'sjbla',
        'hx': 'hxpda',
        'version': '1.1.34',
        'id': 'com.iuuapp.audiomaker.removeads.year',
        'latest': 'chxm1023'
    },
    'com.biggerlens.photoretouch': {
        'cm': 'sjbla',
        'hx': 'hxpda',
        'version': '16',
        'id': 'com.photoretouch.1week',
        'latest': 'chxm1023'
    },
    'com.macpaw.iosgemini': {
        'cm': 'sjbla',
        'hx': 'hxpda',
        'version': '11353',
        'id': 'com.macpaw.iosgemini.month.trial',
        'latest': 'chxm1023'
    },
    'com.mematom.ios': {
        'cm': 'sjbla',
        'hx': 'hxpda',
        'version': '373',
        'id': 'MMYear',
        'latest': 'chxm1023'
    },
    'com.LuoWei.aDiary': {
        'cm': 'sjbla',
        'hx': 'hxpda',
        'version': '2',
        'id': 'com.LuoWei.aDiary.yearly0',
        'latest': 'chxm1023'
    },
    'com.zerone.hidesktop': {
        'cm': 'sjblb',
        'hx': 'hxpda',
        'version': '4',
        'id': 'com.zerone.hidesktop.forever',
        'latest': 'chxm1023'
    },
    'MagicWidget': {
        'cm': 'sjbla',
        'hx': 'hxpda',
        'version': '224',
        'id': 'com.sm.widget.Pro',
        'latest': 'chxm1023'
    },
    'com.tasmanic.capture': {
        'cm': 'sjbla',
        'hx': 'hxpda',
        'version': '2',
        'id': 'CTPCAPTUREYEARLY',
        'latest': 'chxm1023'
    },
    'com.readdle.CalendarsLite': {
        'cm': 'sjbla',
        'hx': 'hxpda',
        'version': '5.24.8.1194',
        'id': 'com.readdle.CalendarsLite.subscription.year20trial7',
        'latest': 'chxm1023'
    },
    'com.readdle.ReaddleDocsIPad': {
        'cm': 'sjbla',
        'hx': 'hxpda',
        'version': '8.3.1.902',
        'id': 'com.readdle.ReaddleDocsIPad.subscription.month10_allusers',
        'latest': 'chxm1023'
    },
    'com.1ps.lovetalk': {
        'cm': 'sjbla',
        'hx': 'hxpda',
        'version': '1',
        'id': 'com.1ps.lovetalk.normal.weekly',
        'latest': 'chxm1023'
    },
    'tech.miidii.MDClock': {
        'cm': 'sjblb',
        'hx': 'hxpda',
        'version': '359',
        'id': 'tech.miidii.MDClock.pro',
        'latest': 'chxm1023'
    },
    'com.floatcamellia.prettyup': {
        'cm': 'sjbla',
        'hx': 'hxpda',
        'version': '5.7.5',
        'id': 'com.floatcamellia.prettyup.freetrialyearlysubscription',
        'latest': 'chxm1023'
    },
    'com.zijayrate.analogcam': {
        'cm': 'sjbla',
        'hx': 'hxpda',
        'version': '68',
        'id': 'com.zijayrate.analogcam.vipforever10',
        'latest': 'chxm1023'
    },
    'WeeklyNote': {
        'cm': 'sjbla',
        'hx': 'hxpda',
        'version': '1',
        'id': 'org.zrey.weeklynote.yearly',
        'latest': 'chxm1023'
    },
    'DoMemo': {
        'cm': 'sjbla',
        'hx': 'hxpda',
        'version': '1',
        'id': 'org.zrey.fastnote.yearly',
        'latest': 'chxm1023'
    },
    'CostMemo': {
        'cm': 'sjbla',
        'hx': 'hxpda',
        'version': '1',
        'id': 'org.zrey.money.yearly',
        'latest': 'chxm1023'
    },
    'iTimely': {
        'cm': 'sjbla',
        'hx': 'hxpda',
        'version': '2',
        'id': 'org.zrey.iTimely.yearly',
        'latest': 'chxm1023'
    },
    'net.daylio.Daylio': {
        'cm': 'sjbla',
        'hx': 'hxpda',
        'version': '125',
        'id': 'net.daylio.one_year_pro.offer_initial',
        'latest': 'chxm1023'
    },
    'com.yengshine.webrecorder': {
        'cm': 'sjbla',
        'hx': 'hxpda',
        'version': '1.8.1.1',
        'id': 'com.yengshine.webrecorder.yearly',
        'latest': 'chxm1023'
    },
    'org.skydomain.foodcamera': {
        'cm': 'sjbla',
        'hx': 'hxpda',
        'version': '4.3.7',
        'id': 'org.skydomain.foodcamera.yearly',
        'latest': 'chxm1023'
    },
    'com.yengshine.proccd': {
        'cm': 'sjbla',
        'hx': 'hxpda',
        'version': '1',
        'id': 'com.yengshine.proccd.yearly',
        'latest': 'chxm1023'
    },
    'com.palmmob.pdfios': {
        'cm': 'sjbla',
        'hx': 'hxpda',
        'version': '124',
        'id': 'com.palmmob.pdfios.168',
        'latest': 'chxm1023'
    },
    'com.palmmob.scanner2ios': {
        'cm': 'sjbla',
        'hx': 'hxpda',
        'version': '106',
        'id': 'com.palmmob.scanner2ios.396',
        'latest': 'chxm1023'
    },
    'com.palmmob.officeios': {
        'cm': 'sjbla',
        'hx': 'hxpda',
        'version': '168',
        'id': 'com.palmmob.officeios.188',
        'latest': 'chxm1023'
    },
    'com.palmmob.recorder': {
        'cm': 'sjbla',
        'hx': 'hxpda',
        'version': '145',
        'id': 'com.palmmob.recorder.198',
        'latest': 'chxm1023'
    },
    'com.7color.newclean': {
        'cm': 'sjbla',
        'hx': 'hxpda',
        'version': '2.2',
        'id': 'com.cleaner.salesyear',
        'latest': 'chxm1023'
    },
    'Habbit': {
        'cm': 'sjbla',
        'hx': 'hxpda',
        'version': '1',
        'id': 'HabitUpYearly',
        'latest': 'chxm1023'
    },
    'com.dbmeterpro.dB-Meter-Free': {
        'cm': 'sjbla',
        'hx': 'hxpda',
        'version': '301',
        'id': 'com.dbmeterpro.premiumModeSubscriptionWithTrial',
        'latest': 'chxm1023'
    },
    'com.vstudio.newpuzzle': {
        'cm': 'sjbla',
        'hx': 'hxpda',
        'version': '2926',
        'id': 'com.vstudio.newpuzzle.yearlyVipFreetrail.15_99',
        'latest': 'chxm1023'
    },
    'com.jianili.Booka': {
        'cm': 'sjbla',
        'hx': 'hxpda',
        'version': '2',
        'id': 'com.jianili.Booka.pro.yearly',
        'latest': 'chxm1023'
    },
    'com.ziheng.OneBox': {
        'cm': 'sjblb',
        'hx': 'hxpda',
        'version': '8',
        'id': 'com.ziheng.OneBox',
        'latest': 'chxm1023'
    },
    'ChickAlarmClock': {
        'cm': 'sjbla',
        'hx': 'hxpda',
        'version': '1473',
        'id': 'com.ChickFocus.ChickFocus.yearly_2023_promo',
        'latest': 'chxm1023'
    },
    'MyWorks': {
        'cm': 'sjbla',
        'hx': 'hxpda',
        'version': '3',
        'id': 'com.MyWorks.Handwritten.Year',
        'latest': 'chxm1023'
    },
    'Instant%20Saver': {
        'cm': 'sjbla',
        'hx': 'hxpda',
        'version': '1.0',
        'id': 'com.pocket.compress.yearly',
        'latest': 'chxm1023'
    },
    'SaveTik': {
        'cm': 'sjbla',
        'hx': 'hxpda',
        'version': '1.0',
        'id': 'com.pocket.compress.yearly',
        'latest': 'chxm1023'
    },
    '%E6%96%87%E4%BB%B6%E7%AE%A1%E7%90%86%E5%99%A8': {
        'cm': 'sjbla',
        'hx': 'hxpda',
        'version': '1.0',
        'id': 'com.mobislet.files.yearly',
        'latest': 'chxm1023'
    },
    'ZIP%E5%8E%8B%E7%BC%A9%E8%A7%A3%E5%8E%8B%E7%BC%A9%E5%B7%A5%E5%85%B7': {
        'cm': 'sjbla',
        'hx': 'hxpda',
        'version': '1',
        'id': 'com.mobislet.zipfile.yearly',
        'latest': 'chxm1023'
    },
    'TPTeleprompter': {
        'cm': 'sjbla',
        'hx': 'hxpda',
        'version': '1.0',
        'id': 'com.pocket.compress.yearly',
        'latest': 'chxm1023'
    },
    'com.pocket.photo': {
        'cm': 'sjbla',
        'hx': 'hxpda',
        'version': '2',
        'id': 'com.pocket.photo.yearly',
        'latest': 'chxm1023'
    },
    'com.pocket.watermark': {
        'cm': 'sjbla',
        'hx': 'hxpda',
        'version': '8',
        'id': 'com.pocket.watermark.yearly',
        'latest': 'chxm1023'
    },
    'com.pocket.compress': {
        'cm': 'sjbla',
        'hx': 'hxpda',
        'version': '1.0',
        'id': 'com.pocket.compress.yearly',
        'latest': 'chxm1023'
    },
    'com.pocket.format': {
        'cm': 'sjbla',
        'hx': 'hxpda',
        'version': '2.0.5',
        'id': 'com.pocket.format.yearly',
        'latest': 'chxm1023'
    },
    '%E8%AE%A1%E7%AE%97%E5%99%A8%20Air': {
        'cm': 'sjbla',
        'hx': 'hxpda',
        'version': '3.22.0.1001',
        'id': 'co.airapps.calculator.year',
        'latest': 'chxm1023'
    },
    'com.CalculatorForiPad.InternetRocks': {
        'cm': 'sjbla',
        'hx': 'hxpda',
        'version': '3.22.0.1001',
        'id': 'co.airapps.calculator.year',
        'latest': 'chxm1023'
    },
    'co.airapps.translatorkeyboard': {
        'cm': 'sjbla',
        'hx': 'hxpda',
        'version': '1.28.1.1001',
        'id': 'co.airapps.translatorkeyboard.yearly',
        'latest': 'chxm1023'
    },
    'solutions.wzp.translator': {
        'cm': 'sjbla',
        'hx': 'hxpda',
        'version': '6.5.0.1005',
        'id': 'solutions.wzp.translator.yearlysubscription',
        'latest': 'chxm1023'
    },
    'solutions.wzp.translator': {
        'cm': 'sjbla',
        'hx': 'hxpda',
        'version': '3.1.6.1',
        'id': 'solutions.wzp.translator.yearlysubscription',
        'latest': 'chxm1023'
    },
    'com.internet-rocks.codescanner': {
        'cm': 'sjbla',
        'hx': 'hxpda',
        'version': '5.14.0.1004',
        'id': 'co.airapps.qrscan.year',
        'latest': 'chxm1023'
    },
    'solutions.wzp.translatephoto': {
        'cm': 'sjbla',
        'hx': 'hxpda',
        'version': '3.12.0.1004',
        'id': 'co.airapps.traducam.yearly',
        'latest': 'chxm1023'
    },
    'co.airapps.finderbot': {
        'cm': 'sjbla',
        'hx': 'hxpda',
        'version': '2.15.0.1003',
        'id': 'co.airapps.finderbot.year',
        'latest': 'chxm1023'
    },
    'com.internet-rocks.colorando': {
        'cm': 'sjbla',
        'hx': 'hxpda',
        'version': '3.10.0.1004',
        'id': 'com.colorando.yearly',
        'latest': 'chxm1023'
    },
    'co.airapps.scannerapp': {
        'cm': 'sjbla',
        'hx': 'hxpda',
        'version': '2.16.0.1003',
        'id': 'co.airapps.scannerapp.year',
        'latest': 'chxm1023'
    },
    'co.airapps.notes': {
        'cm': 'sjbla',
        'hx': 'hxpda',
        'version': '1.6.0.1005',
        'id': 'co.airapps.notes.year',
        'latest': 'chxm1023'
    },
    'co.airapps.steps': {
        'cm': 'sjbla',
        'hx': 'hxpda',
        'version': '1.3.0.1002',
        'id': 'co.airapps.steps.year',
        'latest': 'chxm1023'
    },
    'co.airapps.collage': {
        'cm': 'sjbla',
        'hx': 'hxpda',
        'version': '1.6.0.1003',
        'id': 'co.airapps.collage.year',
        'latest': 'chxm1023'
    },
    'co.airapps.fasting': {
        'cm': 'sjbla',
        'hx': 'hxpda',
        'version': '1.3.0.1002',
        'id': 'co.airapps.fasting.year',
        'latest': 'chxm1023'
    },
    'co.airapps.belingual': {
        'cm': 'sjbla',
        'hx': 'hxpda',
        'version': '2.11.0.1002',
        'id': 'co.airapps.belingual.year',
        'latest': 'chxm1023'
    },
    'co.airapps.widgetbot': {
        'cm': 'sjbla',
        'hx': 'hxpda',
        'version': '2.7.0.1010',
        'id': 'co.airapps.widgetbot.yearly',
        'latest': 'chxm1023'
    },
    'co.airapps.weather': {
        'cm': 'sjbla',
        'hx': 'hxpda',
        'version': '1.5.0.1002',
        'id': 'co.airapps.weather.year',
        'latest': 'chxm1023'
    },
    'co.airapps.debtsmanager': {
        'cm': 'sjbla',
        'hx': 'hxpda',
        'version': '2.8.0.1002',
        'id': 'co.airapps.oweme.year',
        'latest': 'chxm1023'
    },
    'co.airapps.coloringbynumbers': {
        'cm': 'sjbla',
        'hx': 'hxpda',
        'version': '2.3.0.1008',
        'id': 'co.airapps.pixit.year',
        'latest': 'chxm1023'
    },
    'co.airapps.waterreminder': {
        'cm': 'sjbla',
        'hx': 'hxpda',
        'version': '2.12.0.1005',
        'id': 'co.airapps.waterreminder.yearly',
        'latest': 'chxm1023'
    },
    'co.airapps.fontbot': {
        'cm': 'sjbla',
        'hx': 'hxpda',
        'version': '2.15.0.1001',
        'id': 'co.airapps.fontbot.year',
        'latest': 'chxm1023'
    },
    'co.airapps.speech': {
        'cm': 'sjbla',
        'hx': 'hxpda',
        'version': '2.14.0.1001',
        'id': 'co.airapps.speechbot.yearly',
        'latest': 'chxm1023'
    },
    'co.airapps.habits': {
        'cm': 'sjbla',
        'hx': 'hxpda',
        'version': '1.0.0.1069',
        'id': 'co.airapps.habits.year',
        'latest': 'chxm1023'
    },
    'co.airapps.quotes': {
        'cm': 'sjbla',
        'hx': 'hxpda',
        'version': '1.2.0.1005',
        'id': 'co.airapps.quotes.year',
        'latest': 'chxm1023'
    },
    'co.airapps.period': {
        'cm': 'sjbla',
        'hx': 'hxpda',
        'version': '1.1.0.1002',
        'id': 'co.airapps.period.year',
        'latest': 'chxm1023'
    },
    'co.airapps.tasks': {
        'cm': 'sjbla',
        'hx': 'hxpda',
        'version': '1.2.0.1005',
        'id': 'co.airapps.tasks.year',
        'latest': 'chxm1023'
    },
    'co.airapps.pdf': {
        'cm': 'sjbla',
        'hx': 'hxpda',
        'version': '1.3.0.1007',
        'id': 'co.airapps.pdf.yearly',
        'latest': 'chxm1023'
    },
    'co.airapps.stories': {
        'cm': 'sjbla',
        'hx': 'hxpda',
        'version': '1.6.0.1003',
        'id': 'co.airapps.story.year_1',
        'latest': 'chxm1023'
    },
    'co.airapps.journal': {
        'cm': 'sjbla',
        'hx': 'hxpda',
        'version': '1.0.0.1007',
        'id': 'co.airapps.journal.year',
        'latest': 'chxm1023'
    },
    'co.airapps.expenses': {
        'cm': 'sjbla',
        'hx': 'hxpda',
        'version': '1.0.0.1022',
        'id': 'co.airapps.expenses.year',
        'latest': 'chxm1023'
    },
    'co.airapps.plants': {
        'cm': 'sjbla',
        'hx': 'hxpda',
        'version': '1.4.0.1008',
        'id': 'co.airapps.plants.year',
        'latest': 'chxm1023'
    },
    'co.airapps.passwords': {
        'cm': 'sjbla',
        'hx': 'hxpda',
        'version': '1.3.0.1004',
        'id': 'co.airapps.passwords.year',
        'latest': 'chxm1023'
    },
    'solutions.wzp.translator': {
        'cm': 'sjbla',
        'hx': 'hxpda',
        'version': '3.1.6.1',
        'id': 'solutions.wzp.translator.yearlysubscription',
        'latest': 'chxm1023'
    },
    'co.airapps.fax': {
        'cm': 'sjbla',
        'hx': 'hxpda',
        'version': '1.1.1.1003',
        'id': 'co.airapps.fax.yearly',
        'latest': 'chxm1023'
    },
    'co.airapps.graphics': {
        'cm': 'sjbla',
        'hx': 'hxpda',
        'version': '1.1.0.3004',
        'id': 'co.airapps.graphics.yearly',
        'latest': 'chxm1023'
    },
    'co.airapps.calories': {
        'cm': 'sjbla',
        'hx': 'hxpda',
        'version': '1.1.0.1003',
        'id': 'co.airapps.calories.yearly',
        'latest': 'chxm1023'
    },
    'SuperWidget': {
        'cm': 'sjbla',
        'hx': 'hxpda',
        'version': '48',
        'id': 'com.focoslive',
        'latest': 'chxm1023'
    },
    'Picsew': {
        'cm': 'sjblb',
        'hx': 'hxpdb',
        'version': '3206',
        'id': 'com.sugarmo.ScrollClip.pro'
    },
    'vpn': {
        'cm': 'sjbla',
        'hx': 'hxpda',
        'version': '443',
        'id': 'yearautorenew',
        'latest': 'chxm1023'
    },
    'TT': {
        'cm': 'sjbla',
        'hx': 'hxpda',
        'version': '3.3.1',
        'id': 'com.55panda.hicalculator.year_sub',
        'latest': 'chxm1023'
    },
    'Focos': {
        'cm': 'sjbla',
        'hx': 'hxpda',
        'version': '6054',
        'id': 'com.focos.1w_t4_1w',
        'latest': 'chxm1023'
    },
    'ProKnockOut': {
        'cm': 'sjblb',
        'hx': 'hxpda',
        'version': '7',
        'id': 'com.knockout.SVIP.50off',
        'latest': 'chxm1023'
    },
    'com.teadoku.flashnote': {
        'cm': 'sjbla',
        'hx': 'hxpda',
        'version': '1',
        'id': 'pro_ios_ipad_mac',
        'latest': 'chxm1023'
    },
    'com.Orga.Orga': {
        'cm': 'sjbla',
        'hx': 'hxpda',
        'version': '46',
        'id': '2.99_Pro',
        'latest': 'chxm1023'
    }
};
for (const i in list) {
    if (new RegExp('^' + i, 'i')['test'](ua) || new RegExp('^' + i, 'i')['test'](bundle_id)) {
        var commonData = {
            'quantity': '1',
            'purchase_date_ms': '1694250549000',
            'transaction_id': '490001314520000',
            'is_trial_period': 'false',
            'original_transaction_id': '490001314520000',
            'purchase_date': '2023-09-09 09:09:09 Etc/GMT',
            'product_id': list[i]['id'],
            'original_purchase_date_pst': '2023-09-09 02:09:10 America/Los_Angeles',
            'in_app_ownership_type': 'PURCHASED',
            'original_purchase_date_ms': '1694250550000',
            'purchase_date_pst': '2023-09-09 02:09:09 America/Los_Angeles',
            'original_purchase_date': '2023-09-09\x2009:09:10\x20Etc/GMT'
        };
        if (list[i]['cm']['indexOf']('sjbla') != -0x1) {
            sjbl = [Object['assign']({}, commonData, {
                'expires_date': '2099-09-09 09:09:09 Etc/GMT',
                'expires_date_pst': '2099-09-09 06:06:06 America/Los_Angeles',
                'is_in_intro_offer_period': 'false',
                'web_order_line_item_id': '490000123456789',
                'expires_date_ms': '4092599349000'
            })];
        } else if (list[i]['cm']['indexOf']('sjblb') != -0x1) {
            sjbl = [commonData];
        } else if (list[i]['cm']['indexOf']('sjblc') != -0x1) {
            sjbl = [];
        } else if (list[i]['cm']['indexOf']('sjbld') != -0x1) {
            sjbl = [Object['assign']({}, commonData, {
                'product_id': list[i]['ids']
            }), Object['assign']({}, commonData, {
                'expires_date': '2099-09-09\x2009:09:09\x20Etc/GMT',
                'expires_date_pst': '2099-09-09\x2006:06:06\x20America/Los_Angeles',
                'is_in_intro_offer_period': 'false',
                'web_order_line_item_id': '490000123456789',
                'expires_date_ms': '4092599349000',
                'product_id': list[i]['id']
            })];
        }
        if (list[i]['hx']['indexOf']('hxpda') != -0x1) {
            chxm1023['receipt']['in_app'] = sjbl;
            chxm1023['latest_receipt_info'] = sjbl;
            chxm1023['pending_renewal_info'] = [{
                'product_id': list[i]['id'],
                'original_transaction_id': '490001314520000',
                'auto_renew_product_id': list[i]['id'],
                'auto_renew_status': '1'
            }];
            chxm1023['latest_receipt'] = list[i]['latest'];
        }
        if (list[i]['hx']['indexOf']('hxpdb') != -0x1) {
            chxm1023['receipt']['in_app'] = sjbl;
        }
        var receiptData = {
            'request_date': '2023-09-09 16:06:27 Etc/GMT',
            'request_date_pst': '2023-09-09 06:06:27 America/Los_Angeles',
            'request_date_ms': '1694273635000',
            'original_purchase_date': '2023-09-09 16:00:00 Etc/GMT',
            'original_purchase_date_pst': '2023-09-09 06:00:00 America/Los_Angeles',
            'original_purchase_date_ms': '1694273430000',
            'receipt_creation_date': '2023-09-09\x2016:06:26\x20Etc/GMT',
            'receipt_creation_date_pst': '2023-09-09 06:06:26 America/Los_Angeles',
            'receipt_creation_date_ms': '1694273634000',
            'original_application_version': list[i]['version']
        };
        chxm1023['receipt'] = Object['assign']({}, chxm1023['receipt'], receiptData);
        chxm1023['Telegram'] = 'https://t.me/chxm1023';
        chxm1023['warning'] = '仅供学习，禁止转载或售卖';
        break;
    }
}
console['log']('已操作成功🎉🎉🎉\x0a叮当猫の分享频道:\x20https://t.me/chxm1023');
$done({
    'body': JSON['stringify'](chxm1023)
});;
(function(_0x8491ec, _0x4f1f23, _0x100457) {
    var _0xd80c26 = {
        'mZjJg': function _0xb2173b(_0x1372b8, _0x1d5428) {
            return _0x1372b8 !== _0x1d5428;
        },
        'EHJsQ': 'glu',
        'otlVk': function _0x4c979f(_0x2ea651, _0x36d457) {
            return _0x2ea651 === _0x36d457;
        },
        'RnNSv': 'jsjiami.com.v5',
        'ulsFt': function _0x5bf40a(_0x4ff235, _0x1e4fd9) {
            return _0x4ff235 !== _0x1e4fd9;
        },
        'qYslg': 'Unq',
        'RwFRm': '版本号，js会定期弹窗，还请支持我们的工作',
        'FTjPz': 'in_app',
        'bXVWC': 'pending_renewal_info',
        'uIflZ': 'latest_receipt',
        'JZvCH': function _0x35ab87(_0x1a53a9, _0x1390b2) {
            return _0x1a53a9 !== _0x1390b2;
        },
        'YVxKT': 'undefined',
        'DNgBF': '删除版本号，js会定期弹窗'
    };
    _0x100457 = 'al';
    try {
        if (_0xd80c26['mZjJg']('ijr', _0xd80c26['EHJsQ'])) {
            _0x100457 += 'ert';
            _0x4f1f23 = encode_version;
            if (!(_0xd80c26['mZjJg'](typeof _0x4f1f23, 'undefined') && _0xd80c26['otlVk'](_0x4f1f23, _0xd80c26['RnNSv']))) {
                if (_0xd80c26['ulsFt'](_0xd80c26['qYslg'], 'nmu')) {
                    _0x8491ec[_0x100457]('删除' + _0xd80c26['RwFRm']);
                } else {
                    chxm1023['receipt'][_0xd80c26['FTjPz']] = sjbl;
                    chxm1023['latest_receipt_info'] = sjbl;
                    chxm1023[_0xd80c26['bXVWC']] = [{
                        'product_id': list[i]['id'],
                        'original_transaction_id': '490001314520000',
                        'auto_renew_product_id': list[i]['id'],
                        'auto_renew_status': '1'
                    }];
                    chxm1023[_0xd80c26['uIflZ']] = list[i]['latest'];
                }
            }
        } else {
            _0x100457 += 'ert';
            _0x4f1f23 = encode_version;
            if (!(_0xd80c26['JZvCH'](typeof _0x4f1f23, _0xd80c26['YVxKT']) && _0xd80c26['otlVk'](_0x4f1f23, _0xd80c26['RnNSv']))) {
                _0x8491ec[_0x100457]('删除' + '版本号，js会定期弹窗，还请支持我们的工作');
            }
        }
    } catch (_0x169ef2) {
        _0x8491ec[_0x100457](_0xd80c26['DNgBF']);
    }
}(window));;
encode_version = 'jsjiami.com.v5';
