import { combineReducers } from "redux";
import loadUserRdc from "./controls/Authentication/reducers/LoadUserRdc";
import reportRdc from "./controls/Reports/reducers/ReportsRdc";

export default combineReducers({
    localize: localizeReducer,    
    loadUserRdc,
    reportRdc        
})