import React, { useState } from 'react';
import InputMask from 'react-input-mask';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Col, Row } from 'react-bootstrap';

const ExtendedFamily = ({
    addExtendFamily,
    setExtendFamily,
    memberRelation,
    setMemberRelation,
    relationship,
    setRelationship,
    name,
    setName,
    relationSurname,
    setRelationSurname,
    title,
    setTitle,
    dateOfBirth,
    setDateOfBirth,
    age,
    setAge,
    benefit,
    setBenefit,
    premium,
    setPremium,
    subRelationship,
    setSubRelationship,
    ageArray,
    setageArray,
    benefits,
    setBenefits
}) => {

    const [showNext, setShowNext] = useState(false);
    const [error, setError] = useState('');
    const [link, setLink] = useState('');

    const [memberRelationship, setMemberRelationship] = useState([]);

    let showError = false;

    React.useEffect(() => {
        axios.get("./master_data.json").then(res => {
            if (res.data) setMemberRelationship(res.data);
        }).catch(err => console.log(err));
    }, []);

    const resetData = () => {
        setDateOfBirth('');
        setAge('');
        setageArray([]);
        setBenefit('');
        setBenefits([]);
        setPremium('');
        setError('');
    }

    const changeMemberRelationship = (value) => {
        resetData();
        setMemberRelation(value);
        memberRelationship.map(item => {
            if (item.type == value) {
                setSubRelationship(item.relation);
                axios.get("./" + item.filename).then(res => {
                    if (res.data) setageArray(res.data);
                });
            }
        });
    }

    const changeDOB = (value) => {
        setAge('');
        setBenefit('');
        setBenefits([]);
        setPremium('');
        setError('');
        const actualValue = value.replace(/[^a-zA-Z0-9 ]/g, '');
        if (actualValue.length === 8) {
            setDateOfBirth(value);
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

        setAge(ageString);

        ageArray.map(item => {
            // debugger
            if (String(ageString).indexOf("0.") !== -1 && memberRelation == 'Other Extend'
                && ageString >= item.agemin || ageString == "0.10" || ageString == "0.11") {
                showError = true;
                console.log(ageString, item.agemin, item)
                return setBenefits(ageArray[0].benefits);
            }
            if (ageString <= item.agemax && ageString >= item.agemin) {
                showError = true;
                return setBenefits(item.benefits);
            }
            else if (!showError) return setError("No Benefits available for this age");
        });
    };

    const benefitChange = (value) => {
        setError('');
        setBenefit(value);
        benefits.map(item => {
            if (item.amount == value) setPremium(item.premium);
        });
    }

    const requiredSubmitted = () => {
        if (addExtendFamily === 'Yes') {
            if (memberRelation != '') {
                if (relationship != '') {
                    if (dateOfBirth != '') {
                        if (benefit != '') {
                            setShowNext(true);
                            setLink('/7.2');
                            setError('Please check that all info is correct then click next');
                        } else setError('You have not made a selection of Benefits');
                    } else setError('You have not submitted your Date of Birth');
                } else setError('You have not made a selection of Relationship');
            } else setError('You have not made a selection of Family Member Relationship');
        } else {
            setLink('/checkInfo');
            setShowNext(true);
            setError('Please check that all info is correct then click next');
        }
    }

    return (
        <div className="page">
            <h6 style={{ fontWeight: '600', marginTop: '25px', textAlign: 'center', color: '#BB1A1B', marginBottom: '25px' }}>7. Wider Family</h6>
            <Form>
                <Form.Group className='mb-2' controlId='addExtendedFamily'>
                    <Form.Label className='Label' >Do you want to add wider family members? </Form.Label>
                    <Form.Select value={addExtendFamily} onChange={(e) => setExtendFamily(e.target.value)}>
                        <option>{"No"}</option>
                        <option>{"Yes"}</option>
                    </Form.Select>
                </Form.Group>

                {addExtendFamily === 'Yes' &&
                    <Form.Group className='mb-2' controlId='memberRelation'>
                        <Form.Label className='Label'>*Wider Family Members Relationship </Form.Label>
                        <Form.Select value={memberRelation} onChange={(e) => changeMemberRelationship(e.target.value)}>
                            <option value=''>{'Select Member Relationship'}</option>
                            {memberRelationship.map(item =>
                                <option key={item.type} value={item.value} >{item.type}</option>)}
                        </Form.Select>
                    </Form.Group>
                }
                {addExtendFamily === 'Yes' && memberRelation &&
                    <Form.Group className='mb-2' controlId='relationship'>
                        <Form.Label className='Label'>*Relationship </Form.Label>
                        <Form.Select value={relationship} onChange={(e) => setRelationship(e.target.value)}>
                            <option value=''>{'Select Relationship'}</option>
                            {subRelationship.map(item =>
                                <option key={item.type} value={item.type} >{item.type}</option>)}
                        </Form.Select>
                    </Form.Group>
                }

                {addExtendFamily === 'Yes' && memberRelation !== '' &&
                    <>
                        <Form.Group className='mb-3' controlId='name'>
                            <Form.Label className='Label'>*Date of Birth (yyyy-mm-dd)</Form.Label>
                            <InputMask mask="9999-99-99" className='Control form-control' type='text' placeholder={dateOfBirth} onChange={(e) => changeDOB(e.target.value)} />
                        </Form.Group>
                        {age && <>
                            <Form.Group className='mb-3' controlId='age' disabled={true}>
                                <Form.Label className='Label'>Age</Form.Label>
                                <Form.Control className='Control' type='text' placeholder={age} disabled={true} />
                            </Form.Group>
                            <Row>
                                {benefits.length > 0 && <Col lg="6"> <Form.Group className='mb-2' controlId='benefits'>
                                    <Form.Label className='Label'>*Benefits </Form.Label>
                                    <Form.Select value={benefit} onChange={(e) => benefitChange(e.target.value)}>
                                        <option value=''>{'Select Benefits'}</option>
                                        {benefits.map(item =>
                                            <option key={item.amount} value={item.amount} >{item.amount}</option>)}
                                    </Form.Select>
                                </Form.Group> </Col>}
                                {premium && <Col lg="6">
                                    <Form.Group className='mb-3' controlId='preminum'>
                                        <Form.Label className='Label'>*Monthly Premium</Form.Label>
                                        <Form.Control className='Control' type='text' placeholder={'R' + premium + '.00'} disabled={true} />
                                    </Form.Group>
                                </Col>}
                            </Row>
                            {premium && <>
                                <Form.Group className='mb-3' controlId='name'>
                                    <Form.Label className='Label'>Title</Form.Label>
                                    <Form.Control className='Control' type='text' placeholder={title} onChange={(e) => setTitle(e.target.value)} />
                                </Form.Group>
                                <Form.Group className='mb-3' controlId='name'>
                                    <Form.Label className='Label'>Name</Form.Label>
                                    <Form.Control className='Control' type='text' placeholder={name} onChange={(e) => setName(e.target.value)} />
                                </Form.Group>
                                <Form.Group className='mb-3' controlId='name'>
                                    <Form.Label className='Label'>Surname</Form.Label>
                                    <Form.Control className='Control' type='text' placeholder={relationSurname} onChange={(e) => setRelationSurname(e.target.value)} />
                                </Form.Group>
                            </>}
                        </>}
                    </>
                }
            </Form>
            <div style={{ textAlign: 'center', padding: '2vw' }}><h6 style={{ color: 'red', fontWeight: 'bold', textAlign: 'center' }}>{error}</h6></div>
            <div style={{ textAlign: 'center' }}>
                <Link to='/6'>
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

export default ExtendedFamily

