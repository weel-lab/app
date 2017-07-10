FSR.surveydefs = [{
    name: 'browse',
    invite: {
        when: 'onentry'
    },
    pop: {
        when: 'later'
    },
    criteria: {
        sp: 3,
        lf: 3
    },
    include: {
        urls: ['.']
    }
}];
FSR.properties = {
    repeatdays: 0,
    
    language: {
        locale: 'en'
    },
    
    exclude: {
        local: [],
        referer: []
    },
    
    invite: {
        content: '<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.0 Transitional//EN\"><HTML><HEAD><TITLE>Foresee Invite</TITLE></HEAD><BODY><div id=\"fsrinvite\"><div id=\"fsrcontainer\"><div class=\"fsri_sitelogo\"><img src=\"{%baseHref%}sitelogo.gif\" alt=\"Site Logo\"></div><div class=\"fsri_fsrlogo\"><img src=\"{%baseHref%}fsrlogo.gif\" alt=\"Site Logo\"></div></div><div class=\"fsri_body\">Please help us improve this site by taking a few minutes to answer the following questions about the pages you are now visiting.<br><br>Very few of our visitors are presented with this survey so your feedback is very important to us. You can find out <a href=\"http://www.usgs.gov/acsi_info.html\" target=\"_blank\">more about how the survey works</a>.<br><br>All responses are strictly confidential (<a href=\"http://www.usgs.gov/laws/privacy.html\" target=\"_blank\">USGS Privacy Policy</a>).<br><br></div></div></BODY></HTML>',
        width: '500',
        bgcolor: '#333',
        opacity: 0.7,
        x: 'center',
        y: 'center',
        delay: 0,
		timeout: 0,
        buttons: {
            accept: 'Continue',
            decline: 'No thanks'
        },
        hideOnClick: false,
		css: 'foresee-dhtml.css',
		hide: []
    },
    
    tracker: {
        width: '500',
        height: '325',
        timeout: 3,
		adjust: true,
        url: 'tracker.html'
    },
    
    survey: {
        width: 550,
        height: 600,
        loading: true
    },
    
    qualifier: {
        location: 'local',
        width: '500',
        height: '300',
        bgcolor: '#333',
        opacity: 0.7,
        x: 'center',
        y: 'center',
        delay: 0,
        buttons: {
            accept: 'Continue'
        },
        hideOnClick: false,
		css: false
    },
    
    cancel: {
        url: 'cancel.html',
        width: '500',
        height: '300'
    },

    loading: {
        url: 'survey_loading.html'
    },
    
    pop: {
        what: 'survey',
        after: 'leaving-site',
        pu: false,
        tracker: true
    },
    
    meta: {
        referer: true,
        terms: true,
        ref_url: true,
		url: true,
		url_params: false
    },
	
	events: {
		enabled: true,
		id: true
	},
	
	pool: 100,
	
	previous: false,
	
    mode: 'first-party'
};
