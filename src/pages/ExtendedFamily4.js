import React, { useState } from 'react';
import InputMask from 'react-input-mask';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Col, Row } from 'react-bootstrap';

const ExtendedFamily4 = ({
    addExtendFamily4,
    setExtendFamily4,
    memberRelation4,
    setMemberRelation4,
    relationship4,
    setRelationship4,
    name4,
    setName4,
    relationSurname4,
    setRelationSurname4,
    title4,
    setTitle4,
    dateOfBirth4,
    setDateOfBirth4,
    age4,
    setAge4,
    benefit4,
    setBenefit4,
    premium4,
    setPremium4,
    subRelationship4,
    setSubRelationship4,
    ageArray4,
    setageArray4,
    benefits4,
    setBenefits4
}) => {
    const [showNext, setShowNext] = useState(false);
    const [error, setError] = useState("");
    const [link, setLink] = useState("");
    const [memberRelationship, setMemberRelationship] = useState([]);

    let showError = false;

    React.useEffect(() => {
        axios.get("./master_data.json").then(res => {
            if (res.data) setMemberRelationship(res.data);
        }).catch(err => console.log(err));
    }, []);

    const resetData = () => {
        setDateOfBirth4('');
        setAge4('');
        setageArray4([]);
        setBenefit4('');
        setBenefits4([]);
        setPremium4('');
        setError('');
    }

    const changeMemberRelationship = (value) => {
        resetData();
        setMemberRelation4(value);
        memberRelationship.map(item => {
            if (item.type == value) {
                setSubRelationship4(item.relation);
                axios.get("./" + item.filename).then(res => {
                    if (res.data) setageArray4(res.data)
                });
            }
        });
    }

    const changeDOB = (value) => {
        setAge4('');
        setBenefit4('');
        setBenefits4([]);
        setPremium4('');
        setError('');
        const actualValue = value.replace(/[^a-zA-Z0-9 ]/g, '');
        if (actualValue.length === 8) {
            setDateOfBirth4(value);
            getAge(value);
        }
    }

    const getAge = (dateString) => {
        var now = new Date();
        var yearNow = now.getYear();
        var monthNow = now.getMonth();
        var dateNow = now.getDate();

        var dob = new Date(dateString);
        var yearDob = dob.getYear();
        var monthDob = dob.getMonth();
        var dateDob = dob.getDate();
        var age = {};
        var ageString = "";
        var yearAge = "";

        yearAge = yearNow - yearDob;

        if (monthNow >= monthDob)
            var monthAge = monthNow - monthDob;
        else {
            yearAge--;
            var monthAge = 12 + monthNow - monthDob;
        }

        if (dateNow >= dateDob)
            var dateAge = dateNow - dateDob;
        else {
            monthAge--;
            var dateAge = 31 + dateNow - dateDob;

            if (monthAge < 0) {
                monthAge = 11;
                yearAge--;
            }
        }

        if(dateAge == 0) dateAge = 1;
        if(monthAge == 0) monthAge = 1;
        
        age = { years: yearAge, months: monthAge, days: dateAge };

        if ((age.years > 0) && (age.months > 0) && (age.days > 0))
            ageString = age.years;
        else if ((age.years == 0) && (age.months > 0) && (age.days > 0))
            ageString = "0." + age.months;

        setAge4(ageString);
        ageArray4.map(item => {
            if (String(ageString).indexOf("0.") !== -1 && memberRelation4 == 'Other Extend'
                && ageString >= item.agemin || ageString == "0.10" || ageString == "0.11") {
                showError = true;
                return setBenefits4(ageArray4[0].benefits);
            }
            if (ageString <= item.agemax && ageString >= item.agemin) {
                showError = true;
                return setBenefits4(item.benefits);
            }
            else if (!showError) return setError("No Benefits available for this age");
        });
    };

    const benefitChange = (value) => {
        setError('');
        setBenefit4(value);
        benefits4.map(item => {
            if (item.amount == value) setPremium4(item.premium);
        });
    }

    const requiredSubmitted = () => {
        if (addExtendFamily4 === 'Yes') {
            if (memberRelation4 != '') {
                if (relationship4 != '') {
                    if (dateOfBirth4 != '') {
                        if (benefit4 != '') {
                            setShowNext(true);
                            setLink('/7.5');
                            setError('Please check that all info is correct then click next');
                        } else setError('You have not made a selection of Benefits');
                    } else setError('You have not submitted your Date of Birth');
                } else setError('You have not made a selection of Relationship');
            } else setError('You have not made a selection of Family Member Relationship');
        } else {
            setLink('/extendedPayment');
            setShowNext(true);
            setError('Please check that all info is correct then click next');
        }
    }

    return (
        <div className="page">
            <h6 style={{ fontWeight: '600', marginTop: '25px', textAlign: 'center', color: '#BB1A1B', marginBottom: '25px' }}>7. Wider Family</h6>
            <Form>
                <Form.Group className='mb-2' controlId='addExtendedFamily'>
                    <Form.Label className='Label' >Do you want to add additional family members? </Form.Label>
                    <Form.Select value={addExtendFamily4} onChange={(e) => setExtendFamily4(e.target.value)}>
                        <option>{"No"}</option>
                        <option>{"Yes"}</option>
                    </Form.Select>
                </Form.Group>

                {addExtendFamily4 === 'Yes' &&
                    <Form.Group className='mb-2' controlId='memberRelation'>
                        <Form.Label className='Label'>*Wider Family Members Relationship </Form.Label>
                        <Form.Select value={memberRelation4} onChange={(e) => changeMemberRelationship(e.target.value)}>
                            <option value=''>{'Select Member Relationship'}</option>
                            {memberRelationship.map(item =>
                                <option key={item.type} value={item.value} >{item.type}</option>)}
                        </Form.Select>
                    </Form.Group>
                }
                {addExtendFamily4 === 'Yes' && memberRelation4 &&
                    <Form.Group className='mb-2' controlId='relationship'>
                        <Form.Label className='Label'>*Relationship </Form.Label>
                        <Form.Select value={relationship4} onChange={(e) => setRelationship4(e.target.value)}>
                            <option value=''>{'Select Relationship'}</option>
                            {subRelationship4.map(item =>
                                <option key={item.type} value={item.type} >{item.type}</option>)}
                        </Form.Select>
                    </Form.Group>
                }

                {addExtendFamily4 === 'Yes' && memberRelation4 !== '' &&
                    <>
                        <Form.Group className='mb-3' controlId='name'>
                            <Form.Label className='Label'>*Date of Birth (yyyy-mm-dd)</Form.Label>
                            <InputMask mask="9999-99-99" className='Control form-control' type='text' placeholder={dateOfBirth4} onChange={(e) => changeDOB(e.target.value)} />
                        </Form.Group>
                        {age4 && <>
                            <Form.Group className='mb-3' controlId='age' disabled={true}>
                                <Form.Label className='Label'>Age</Form.Label>
                                <Form.Control className='Control' type='text' placeholder={age4} disabled={true} />
                            </Form.Group>
                            <Row>
                                {benefits4.length > 0 && <Col lg="6"> <Form.Group className='mb-2' controlId='benefits4'>
                                    <Form.Label className='Label'>*Benefits </Form.Label>
                                    <Form.Select value={benefit4} onChange={(e) => benefitChange(e.target.value)}>
                                        <option value=''>{'Select Benefits'}</option>
                                        {benefits4.map(item =>
                                            <option key={item.amount} value={item.amount} >{item.amount}</option>)}
                                    </Form.Select>
                                </Form.Group> </Col>}
                                {premium4 && <Col lg="6">
                                    <Form.Group className='mb-3' controlId='preminum'>
                                        <Form.Label className='Label'>*Monthly Premium</Form.Label>
                                        <Form.Control className='Control' type='text' placeholder={'R' + premium4 + '.00'} disabled={true} />
                                    </Form.Group>
                                </Col>}
                            </Row>
                            {premium4 && <>
                                <Form.Group className='mb-3' controlId='name'>
                                    <Form.Label className='Label'>Title</Form.Label>
                                    <Form.Control className='Control' type='text' placeholder={title4} onChange={(e) => setTitle4(e.target.value)} />
                                </Form.Group>
                                <Form.Group className='mb-3' controlId='name'>
                                    <Form.Label className='Label'>Name</Form.Label>
                                    <Form.Control className='Control' type='text' placeholder={name4} onChange={(e) => setName4(e.target.value)} />
                                </Form.Group>
                                <Form.Group className='mb-3' controlId='name'>
                                    <Form.Label className='Label'>Surname</Form.Label>
                                    <Form.Control className='Control' type='text' placeholder={relationSurname4} onChange={(e) => setRelationSurname4(e.target.value)} />
                                </Form.Group>
                            </>}
                        </>}
                    </>
                }
            </Form>
            <div style={{ textAlign: 'center', padding: '2vw' }}><h6 style={{ color: 'red', fontWeight: 'bold', textAlign: 'center' }}>{error}</h6></div>
            <div style={{ textAlign: 'center' }}>
                <Link to='/7.3'>
                    <Button variant='secondary w-25' style={{ fontWeight: '600', background: '#D0D0D0', border: 'none', float: 'left', marginTop: '10vw', marginLeft: '20vw', marginBottom: '10vh' }}>BACK</Button>
                </Link>
                {showNext && <Link to={link}>
                    <Button variant='danger w-25' style={{ fontWeight: '600', background: '#BB1A1B', border: 'none', float: 'right', marginTop: '10vw', marginRight: '20vw', marginBottom: '10vh' }} >NEXT</Button>
                </Link>}
                {!showNext && <Button variant='danger w-25' style={{ fontWeight: '600', background: '#BB1A1B', border: 'none', float: 'right', marginTop: '10vw', marginRight: '20vw', marginBottom: '10vh' }} onClick={requiredSubmitted} >Submit</Button>}
            </div>
        </div>
    )
};

export default ExtendedFamily4;
