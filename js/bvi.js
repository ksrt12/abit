/*
  bvi.js
  (c) 2020 kazakovstepan
  for ITMO University
*/

var EGE,
	nonconf = ' Не подтв.',
	yesconf = ' Подтв.';
const ia = 'ИД',
	bvi = 'БВИ',
	sto = '100',
	wtf = '—',
	itin = 'спросить у Итина',
	DEF_EGE = {
		'русский язык':100,
		'математика':100,
		'иностранный язык':100,
		'физика':100,
		'химия':100,
		'биология':100,
		'обществознание':100,
		'информатика':100
	},
	SUBJ_EGE = {
		'автономные транспортные системы':'информатика',
		'анализ космических снимков и геопространственных данных':'информатика',
		'астрономия':'физика',
		'астрономия и науки о земле':'физика',
		'беспилотные авиационные системы':'информатика',
		'биология':'биология',
		'водные робототехнические системы':'информатика',
		'восточные языки':'иностранный язык',
		'гуманитарные и социальные науки':'обществознание',
		'естественные науки':['химия','физика','биология'],
		'инженерное дело':'физика',
		'инженерные биологические системы':'биология',
		'инженерные науки':['физика','информатика'],
		'инженерные системы':'физика',
		'иностранный язык':'иностранный язык',
		'иностранные языки':'иностранный язык',
		'интеллектуальные робототехнические системы':'информатика',
		'интеллектуальные энергетические системы':'информатика',
		'информатика':'информатика',
		'информационная безопасность':'информатика',
		'информационные технологии':'информатика',
		'китайский язык':'иностранный язык',
		'компьютерная безопасность':'информатика',
		'космонавтика':'физика',
		'криптография':'математика',
		'лингвистика':'иностранный язык',
		'математика':'математика',
		'медицина':'биология',
		'механика и математическое моделирование':'физика',
		'наносистемы и наноинженерия':'физика',
		'нанотехнологии':['химия','физика','биология'],
		'нейротехнологии':'информатика',
		'нейротехнологии и когнитивные науки':'информатика',
		'обществознание':'обществознание',
		'передовые производственные технологии':'информатика',
		'политология':'обществознание',
		'программная инженерия финансовых технологий':'информатика',
		'разработка приложений виртуальной и дополненной реальности':'информатика',
		'робототехника':'информатика',
		'русский язык':false,
		'системы связи и дистанционного зондирования земли':['физика','информатика'],
		'социология':'обществознание',
		'техника и технологии':'физика',
		'технический рисунок и декоративная композиция':'информатика',
		'технологии беспроводной связи':'информатика',
		'умный город':['физика','информатика'],
		'физика':'физика',
		'химия':'химия',
		'экономика':'обществознание',
		'электронная инженерия: умный дом':'информатика',
		'ядерные технологии':'физика',
		'журналистика':false,
		'педагогические науки и образование':false,
		'филология':false
	};

function getEGE() {
	EGE = params.EGE.split(',').reduce(
		function(p, e) {
			let a = e.split(':');
			p[decodeURIComponent(a[0]).toLowerCase()] = decodeURIComponent(a[1]);
			return p;
		}, {}
	);
}

function checkBVI(stream,subj_in,name_in,lvl_in,dip_in){

let status,
	lvl = Number(lvl_in),
	dip = Number(dip_in),
	subj = subj_in.toLowerCase(),
	name = name_in.replace(/[«»]+/g, '"');

function itt() {
	return (lvl === 1) ? bvi : wtf;
}

switch(stream) {
	case '01.03.02':
		switch(subj) {
			case 'информатика':
				switch(name) {
					case 'Московская олимпиада школьников':
					case 'Олимпиада школьников "Ломоносов"':
					case 'Олимпиада школьников по информатике и программированию':
					case 'Открытая олимпиада школьников по программированию':
					case 'Всесибирская открытая олимпиада школьников':
					case 'Всероссийская олимпиада школьников "Высшая проба"':
					case 'Межрегиональная олимпиада школьников "Высшая проба"':
					case 'Олимпиада Университета Иннополис "Innopolis Open"':
					case 'Олимпиада школьников Санкт-Петербургского государственного университета':
					case 'Олимпиада школьников по программированию "ТехноКубок"':
						status = (lvl === 3) ? sto : bvi;
						break;
					case 'Открытая олимпиада школьников':
						status = ((lvl !== 3) && (dip === 1)) ? bvi : sto;
						break;
					default:
						status = sto;
				}
				break;
			case 'математика':
				switch(name) {
					case 'Межрегиональная олимпиада школьников "Высшая проба"':
					case 'Всероссийская олимпиада школьников "Высшая проба"':
					case 'Межрегиональная олимпиада школьников по математике и криптографии':
					case 'Олимпиада школьников "Ломоносов"':
					case 'Олимпиада школьников "Покори Воробьѐвы горы!"':
					case 'Олимпиада школьников "Покори Воробьёвы горы!"':
					case 'Всесибирская открытая олимпиада школьников':
					case 'Межрегиональная олимпиада школьников на базе ведомственных образовательных организаций':
					case 'Объединённая межвузовская математическая олимпиада школьников':
					case 'Объединённая международная математическая олимпиада "Формула Единства" / "Третье тысячелетие"':
					case 'Межрегиональная олимпиада школьников им. И.Я.Верченко':
					case 'Олимпиада Курчатов':
					case 'Олимпиада школьников "Физтех"':
					case 'Олимпиада Юношеской математической школы':
					case 'Отраслевая физико-математическая олимпиада школьников "Росатом"':
					case 'Турнир имени М.В. Ломоносова':
						status = ((lvl !== 3) && (dip === 1)) ? bvi : sto;
						break;
					case 'Открытая олимпиада школьников':
						status = ((lvl === 3) && (dip === 1)) ? bvi : sto;
						break;
					case 'Московская олимпиада школьников':
					case 'Олимпиада школьников Санкт-Петербургского государственного университета':
					case 'Санкт-Петербургская олимпиада школьников':
					case 'Турнир городов':
						status = (lvl === 3) ? sto : bvi;
						break;
					default:
						status = sto;
				}
				break;
			case 'компьютерная безопасность':
				status = ((dip === 1) && (lvl !== 3)) ? (name == 'Межрегиональная олимпиада школьников по информатике и компьютерной безопасности') ? bvi : itin : wtf;
				break;
			case 'информационные технологии':
				status = (lvl === 1) ? (dip === 1) ? bvi : sto : wtf;
				break;
			default:
				status = wtf;
		}
		break;
	case '09.03.02':
		switch(name){
			case 'Открытая олимпиада школьников':
				switch(subj) {
					case 'математика':
						status = (lvl === 3) ? bvi : itin;
						break;
					case 'информатика':
						status = (lvl === 3) ? sto : bvi;
						break;
					case 'информационные технологии':
						status = itt();
						break;
				}
				break;
			default:
				switch(subj) {
					case 'информационные технологии':
						status = itt();
						break;
					case 'математика':
					case 'информатика':
						status = (lvl === 3) ? sto : bvi;
						break;
					default:
						status = wtf;
				}
		}
		break;
	case '09.03.03':
		switch(subj) {
			case 'информационные технологии':
				status = itt();
				break;
			case 'математика':
			case 'информатика':
				status = (lvl === 3) ? sto : bvi;
				break;
			default:
				status = wtf;
		}
		break;
	case '11.03.02':
		switch(subj) {
			case 'информационные технологии':
				status = itt();
				break;
			case 'математика':
			case 'информатика':
			case 'системы связи и дистанционного зондирования земли':
			case 'технологии беспроводной связи':
			case 'электронная инженерия: умный дом':
			case 'умный город':
				status = bvi;
				break;
			default:
				status = wtf;
		}
		break;
	case '45.03.04':
		switch(subj) {
			case 'информационные технологии':
				status = itt();
				break;
			case 'математика':
			case 'информатика':
			case 'иностранный язык':
			case 'иностранные языки':
			case 'китайский язык':
			case 'восточные языки':
			case 'лингвистика':
				status = bvi;
				break;
			default:
				status = wtf;
		}
		break;
	case '09.03.01':
	case '09.03.04':
	case '10.03.01':
	case '11.03.03':
	case '12.03.01':
	case '13.03.02':
	case '15.03.04':
	case '15.03.06':
	case '24.03.02':
	case '27.03.04':
	case '44.03.04':
		switch(subj) {
			case 'информационные технологии':
				status = itt();
				break;
			case 'криптография':
				status = (lvl === 1) ? bvi : sto;
				break;
			case 'математика':
			case 'информатика':
			case 'компьютерная безопасность':
			case 'информационная безопасность':
			case 'беспилотные авиационные системы':
			case 'автономные транспортные системы':
			case 'интеллектуальные робототехнические системы':
			case 'системы связи и дистанционного зондирования земли':
			case 'анализ космических снимков и геопространственных данных':
			case 'водные робототехнические системы':
			case 'нейротехнологии':
			case 'нейротехнологии и когнитивные науки':
			case 'передовые производственные технологии':
			case 'программная инженерия финансовых технологий':
			case 'разработка приложений виртуальной и дополненной реальности':
			case 'технологии беспроводной связи':
			case 'электронная инженерия: умный дом':
			case 'умный город':
			case 'робототехника':
			case 'инженерные науки':
			case 'технический рисунок и декоративная композиция':
				status = bvi;
				break;
			default:
				status = wtf;
		}
		break;
	case '12.03.02':
	case '12.03.03':
	case '12.03.05':
	case '12.05.01':
		switch(subj) {
			case 'информационные технологии':
				status = itt();
				break;
			case 'математика':
			case 'информатика':
			case 'техника и технологии':
			case 'естественные науки':
			case 'инженерное дело':
			case 'системы связи и дистанционного зондирования земли':
			case 'ядерные технологии':
			case 'технологии беспроводной связи':
			case 'электронная инженерия: умный дом':
			case 'инженерные системы':
			case 'нанотехнологии':
			case 'инженерные науки':
			case 'астрономия':
			case 'физика':
				status = bvi;
				break;
			default:
				status = wtf;
		}
		break;
	case '12.03.04':
	case '18.03.02':
	case '19.03.01':
		switch(subj) {
			case 'математика':
			case 'нанотехнологии':
			case 'естественные науки':
			case 'химия':
			case 'инженерные биологические системы':
			case 'биология':
				status = bvi;
				break;
			default:
				status = wtf;
		}
		break;
	case '16.03.01':
		switch(subj) {
			case 'математика':
			case 'инженерное дело':
			case 'системы связи и дистанционного зондирования земли':
			case 'наносистемы и наноинженерия':
			case 'инженерные системы':
			case 'нанотехнологии':
			case 'инженерные науки':
			case 'астрономия':
			case 'физика':
			case 'механика и математическое моделирование':
			case 'космонавтика':
			case 'астрономия и науки о земле':
			case 'умный город':
			case 'естественные науки':
				status = bvi;
				break;
			case 'информатика':
				status = (lvl === 3) ? wtf : bvi;
				break;
			default:
				status = wtf;
		}
		break;
	case '14.03.01':
	case '16.03.03':
	case '23.03.03':
		switch(subj) {
			case 'математика':
			case 'естественные науки':
			case 'инженерное дело':
			case 'ядерные технологии':
			case 'инженерные системы':
			case 'нанотехнологии':
			case 'инженерные науки':
			case 'астрономия':
			case 'физика':
				status = bvi;
				break;
			case 'информатика':
				status = sto;
				break;
			default:
				status = wtf;
		}
		break;
	case '27.03.05':
	case '38.03.05':
		switch(subj) {
			case 'информационные технологии':
				status = itt();
				break;
			case 'математика':
			case 'информатика':
			case 'иностранный язык':
			case 'иностранные языки':
			case 'китайский язык':
			case 'восточные языки':
			case 'лингвистика':
			case 'экономика':
			case 'обществознание':
			case 'социология':
			case 'гуманитарные и социальные науки':
				status = bvi;
				break;
			default:
				status = wtf;
		}
		break;
	default:
		status = wtf;
}

	if (EGE === undefined) {
		EGE = DEF_EGE;
		yesconf = '';
		nonconf = '';
	}

	if (subj === 'русский язык') {
		return (checkConfNum(EGE[subj], 75) === 1) ? sto : wtf;
	}
	let ch60 = checkConf(subj, 60);
	let ch75 = checkConf(subj, 75);

	function chwtf() {
		return ((ch60 === wtf) || (ch60 === itin)) ? ch60 : ia + ch60;
	}

	if (status === wtf) {
		status = chwtf();
	} else if ((status === bvi) || (status === sto)) {
		if (ch75 === yesconf) {
			status += yesconf;
		} else {
			status = chwtf();
		}
	}

	return status;
}

function checkConfNum(curr_points, conf_points) {
	return (curr_points >= conf_points) ? 1 : 0;
}

function checkConf(olymp_profile, conf_points) {
	let stat = 0;
	const conf_subj = SUBJ_EGE[olymp_profile];

	if (conf_subj === undefined) {
		return itin;
	} else if (conf_subj === false) {
		return wtf;
	} else if (Array.isArray(conf_subj)) {
		for (let i of conf_subj) {
			stat += checkConfNum(EGE[i], conf_points);
		}
	} else {
		stat = checkConfNum(EGE[conf_subj], conf_points);
	}

	return (stat > 0) ? yesconf : nonconf;
}

function makeselector(){
let streams = [
	"01.03.02",
	"09.03.01",
	"09.03.02",
	"09.03.03",
	"09.03.04",
	"10.03.01",
	"11.03.02",
	"11.03.03",
	"12.03.01",
	"12.03.02",
	"12.03.03",
	"12.03.04",
	"12.03.05",
	"12.05.01",
	"13.03.02",
	"14.03.01",
	"15.03.04",
	"15.03.06",
	"16.03.01",
	"16.03.03",
	"18.03.02",
	"19.03.01",
	"23.03.03",
	"24.03.02",
	"27.03.04",
	"27.03.05",
	"38.03.05",
	"44.03.04",
	"45.03.04",
	];
let sstream = document.createElement('select');
	sstream.autofocus = true;
	sstream.addEventListener('change', function(){
		update_status(this.value);
	});
	for (let i = 0; i < streams.length; i++) {
	let option = document.createElement("option");
		option.value = streams[i];
		option.text = streams[i];
		sstream.appendChild(option);
	}
	return sstream;
}
